import type { Route } from "../public/+types/signup";

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function Signup({ loaderData }: Route.ComponentProps) {

  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      <h1>Signup Page</h1>
    </div>
  );
}
