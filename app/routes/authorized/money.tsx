import type { Route } from "../authorized/+types/money";

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function Money({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      <h2>Money Page</h2>
      <ol>
        <li>store</li>
        <li>money tracker</li>
        <li>budgets</li>
      </ol>
    </div>
  );
}
