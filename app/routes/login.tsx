import { data, redirect } from "react-router";
import type { Route } from "./+types/login";
import { getSession, commitSession } from "../sessions.server";
import useApi from "~/hooks/useApi";
import type { ITokenResponseDto } from "~/interfaces/api/users/ITokenResponseDto";
import type { IUserLoginDto } from "~/interfaces/api/users/IUserLoginDto";

// setup request as part of Route.LoaderArgs
export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("auth")) {
    // redirect to home if logged in already
    return redirect("/home");
  }

  if (
    (session.get("expiration") ??
      new Date().setHours(new Date().getHours() + 1)) > new Date()
  ) {
    //do our refresh logic
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

// setup request as part of Route.ActionArgs
export async function action({ request }: Route.ActionArgs) {
  const { makeRequestAsync } = useApi();

  const session = await getSession(request.headers.get("Cookie"));

  const form = await request.formData();
  const username = form.get("username")!.toString();
  const password = form.get("password")!.toString();

  try {
    const [{ accessToken, expiration, refreshToken }, status] =
      await makeRequestAsync<ITokenResponseDto, IUserLoginDto>(
        null,
        "account",
        [{ type: "path", value: "login" }],
        "POST",
        {
          username,
          password,
        }
      );

    if (status >= 500) {
      throw Error(`Code ${500} was returned.`);
    }

    if (status === 401 || status === 403) {
      // try refresh
    }

    if (!accessToken) {
      session.flash("error", "Invalid username/password");

      return redirect("/login", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    }

    session.set("auth", accessToken);
    session.set("expiration", expiration);
    session.set("refreshToken", refreshToken);

    return redirect("/home", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (ex) {
    session.flash("error", "Something went wrong");
  }
}

export default function Login({ loaderData }: Route.ComponentProps) {
  const { error } = loaderData;

  return (
    <div>
      {error ? <div className="error">{error}</div> : null}
      <form method="POST">
        <div>
          <p>Please sign in</p>
        </div>
        <label>
          Username: <input type="text" name="username" />
        </label>
        <label>
          Password: <input type="password" name="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
