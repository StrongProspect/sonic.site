import { data } from "react-router";
import type { Route } from "../authorized/+types/gigs_tours";
import useApi from "~/hooks/useApi";
import { getSession } from "~/sessions.server";
import type { IEvent } from "~/interfaces/api/events/IEvent";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const { makeRequestAsync } = useApi();
  // TODO: Implement your loader logic here
  const [events, status] = await makeRequestAsync<unknown, void>(
    { Authorization: `Bearer ${session.data.auth}` },
    "events",
    null,
    "GET"
  );

  return data({});
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: Implement your action logic here
  return {};
}

export default function Shows({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {/* TODO: Add your page's JSX here */}
      {/* <h1>Gigs_tours Page</h1>
      <ol>
        <li>gigs</li>
        <li>tour builder</li>
        <li>schedule</li>
        <li>tasks</li>
        <li>events</li>
      </ol> */}
    </div>
  );
}
