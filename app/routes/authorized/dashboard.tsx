import type { Route } from "../authorized/+types/dashboard";

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      <h1>Dashboard Page</h1>
      <form method="POST">
        <div>
          <p>Test Song</p>
        </div>
        <label>
          Artist: <input type="text" name="username" />
        </label>
        <label>
          Song: <input type="text" name="password" />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
