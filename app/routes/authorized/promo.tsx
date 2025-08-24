import type { Route } from "../authorized/+types/promo";

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function Promo({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      <h1>Promo Page</h1>
      <ol>
        <li>press kit</li>
        <li>distribution partners</li>
      </ol>
    </div>
  );
}
