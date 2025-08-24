import type { Route } from "../authorized/+types/gigs_tours";

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function Shows({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      <h1>Gigs_tours Page</h1>
      <ol>
        <li>gigs</li>
        <li>tour builder</li>
        <li>schedule</li>
        <li>tasks</li>
        <li>events</li>
      </ol>
    </div>
  );
}
