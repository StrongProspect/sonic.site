import { data, Outlet, redirect } from "react-router";
import { commitSession, getSession } from "~/sessions.server";
import type { Route } from "./+types/authorized";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const cook = request.headers.get("Cookie");

  if (!session.has("auth")) {
    return redirect("/login");
  }

  if (
    (session.get("expiration") ??
      new Date().setHours(new Date().getHours() + 1)) > new Date()
  ) {
    //do our refresh logic
  }

  return data(
    { error: session.get("error") },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

const Authorized = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>
      <h1>You're logged in!</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Authorized;
