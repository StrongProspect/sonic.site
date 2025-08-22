import type { Route } from "../public/+types/privacy";

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function Privacy({ loaderData }: Route.ComponentProps) {

  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      <h1>Privacy Page</h1>
    </div>
  );
}
