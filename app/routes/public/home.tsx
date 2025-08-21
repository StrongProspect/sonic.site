import { getSession } from "~/sessions.server";
import type { Route } from "../public/+types/home";
import { redirect } from "react-router";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  // if (!session.has("auth")) {
  // redirect to home if logged in already
  //   return redirect("/");
  // }
}

export default function Home() {
  return <h1>Hi</h1>;
}
