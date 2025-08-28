import { data, Outlet, redirect } from "react-router";
import Footer from "./footer";
import Header from "./header";
import type { Route } from "./+types/layout";
import { commitSession, destroySession, getSession } from "~/sessions.server";
import { isEnumValue } from "~/utilities/enumHelper";
import { PrivateRoute } from "~/routes";
import { useCallback } from "react";

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

const Layout = ({ loaderData }: Route.ComponentProps) => {
  function handleLogout(e: React.FormEvent<HTMLFormElement>) {
    (document.getElementById("logoutForm") as HTMLFormElement).submit();
  }

  return (
    <>
      <Header authorized={loaderData.auth} handleLogout={handleLogout} />
      <div className="md:min-h-[calc(100vh-256px)] min-h-[calc(100vh-192px)]">
        <div className="md:m-25 md:mt-15 m-5 mt-5 mb-0">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
