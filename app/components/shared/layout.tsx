import { data, Outlet, redirect } from "react-router";
import Footer from "./footer";
import Header from "./header";
import type { Route } from "./+types/layout";
import { commitSession, destroySession, getSession } from "~/sessions.server";
import { isEnumValue } from "~/utilities/enumHelper";
import { PrivateRoute } from "~/routes";
import Background from "~/svgs/background";
import { useCallback, useEffect, useRef } from "react";

export interface ILayoutContext {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const pathItems = request.url.split("/");
  const accessingPrivatePath = pathItems.some((x) =>
    isEnumValue(PrivateRoute, `/${x}`)
  );

  if (!session.has("auth") && accessingPrivatePath) {
    return redirect("/login");
  }

  if (
    (session.get("expiration") ??
      new Date().setHours(new Date().getHours() - 1)) < new Date()
  ) {
    //do our refresh logic
  }

  return data(
    { error: session.get("error"), auth: session.has("auth") },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}

function updateClipPath(el: HTMLDivElement | null) {
  // Get element's dimensions in pixels
  const width = el?.offsetWidth ?? 0;
  const height = el?.offsetHeight ?? 0;

  // Define path points based on element's dimensions.
  // This approach keeps the path responsive to the element's size.
  // This is functionally equivalent to the original unitless path.
  const p1 = { x: 0, y: 0 };
  const p2 = { x: width, y: 0 };
  const p3 = { x: width, y: height * 0.7 };
  const p4 = { x: width * 0.6, y: height * 0.6 }; // Peak of the curve, moved to the right
  const p5 = { x: 0, y: height * 0.8 }; // Final point on the left

  // Define control points for the Bezier curves
  const cp1_1 = { x: width * 0.8, y: height * 0.7 };
  const cp1_2 = { x: width * 0.7, y: height * 0.6 }; // Adjusted for the new peak location

  const cp2_1 = { x: width * 0.5, y: height * 0.6 }; // Adjusted for the new peak location
  const cp2_2 = { x: width * 0.1, y: height * 0.8 };

  // Construct the path string with pixel values
  const path = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} C ${cp1_1.x} ${cp1_1.y}, ${cp1_2.x} ${cp1_2.y}, ${p4.x} ${p4.y} C ${cp2_1.x} ${cp2_1.y}, ${cp2_2.x} ${cp2_2.y}, ${p5.x} ${p5.y} Z`;

  // Apply the dynamically generated clip-path
  if (el !== null) {
    el.style.clipPath = `path('${path}')`;
  }
}

// Run the function on initial load and whenever the window is resized
// window.addEventListener('load', updateClipPath);
// window.addEventListener('resize', updateClipPath);

const Layout = ({ loaderData }: Route.ComponentProps) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  function handleLogout(e: React.FormEvent<HTMLFormElement>) {
    (document.getElementById("logoutForm") as HTMLFormElement).submit();
  }

  const handleCurvy = useCallback(() => {
    if (layoutRef.current) {
      updateClipPath(layoutRef.current);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("load", handleCurvy);
    window.addEventListener("resize", handleCurvy);

    return () => {
      window.removeEventListener("load", handleCurvy);
      window.removeEventListener("resize", handleCurvy);
    };
  }, []);

  return (
    <>
      <Header authorized={loaderData.auth} handleLogout={handleLogout} />
      {/* <Background /> */}
      <div
        ref={layoutRef}
        style={{
          clipPath:
            "path('M 0 0 L 1000 0 L 1000 350 C 800 350, 700 300, 600 300 C 500 300, 100 400, 0 400 Z')",
        }}
        className="md:min-h-[calc(100vh-256px)] min-h-[calc(100vh-192px)] bg-tertiary md:p-25 md:pt-40 p-5 pt-13 pb-0"
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
