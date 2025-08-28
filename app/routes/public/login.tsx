import { data, Link, redirect } from "react-router";
import type { Route } from "../public/+types/login";
import { getSession, commitSession } from "../../sessions.server";
import useApi from "~/hooks/useApi";
import type { ITokenResponseDto } from "~/interfaces/api/users/ITokenResponseDto";
import type { IUserLoginDto } from "~/interfaces/api/users/IUserLoginDto";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("auth")) {
    // redirect to home if logged in already
    return redirect("/gigs-tours");
  }

  return data(
    { error: session.get("error") },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export async function action({ request }: Route.ActionArgs) {
  const { makeRequestAsync, authenticate } = useApi();

  const session = await getSession(request.headers.get("Cookie"));

  const form = await request.formData();
  const username = form.get("username")!.toString();
  const password = form.get("password")!.toString();

  try {
    const [{ accessToken, expiration, refreshToken }, status] =
      await authenticate({ username, password });

    if (status >= 500) {
      throw Error(`Code ${500} was returned.`);
    }

    if (status === 401 || status === 403) {
      // handle bad request
    }

    if (!accessToken) {
      session.flash("error", "Invalid username/password");

      return redirect("/login", {
        headers: { "Set-Cookie": await commitSession(session) },
      });
    }

    session.set("auth", accessToken);
    session.set("expiration", expiration);
    session.set("refreshToken", refreshToken);

    const commit = await commitSession(session);

    return redirect("/gigs-tours", {
      headers: {
        "Set-Cookie": commit,
      },
    });
  } catch (ex) {
    session.flash("error", "Invalid username/password");

    return redirect("/login", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  }
}

export default function Login({ loaderData }: Route.ComponentProps) {
  const { error } = loaderData;

  return (
    <div className="max-w-screen">
      {error ? <div className="error">{error}</div> : null}
      <form method="POST" className="max-w-full">
        <div className="flex flex-col space-y-4 bg-white rounded-xl shadow-lg p-6 lg:max-w-[50rem] max-w-96 mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-800">
            Get Rolling
          </h2>
          <div className="max-w-72 mx-auto">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="max-w-72 mx-auto">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-center">
            <Link to="/signup">Sign Up</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-md max-w-60 mx-auto"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
