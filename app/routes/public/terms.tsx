import type { Route } from "../public/+types/terms";

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function Terms({ loaderData }: Route.ComponentProps) {

  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      <h1>Terms Page</h1>
    </div>
  );
}
