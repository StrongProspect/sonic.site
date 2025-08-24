import type { Route } from "../authorized/+types/toolbox";

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function Toolbox({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      <h1>Toolbox Page</h1>
      <ol>
        <li>contracts</li>
        <li>stage plot builder</li>
        <li>venue finder (move this to gigs/tours maybe?)</li>
      </ol>
    </div>
  );
}
