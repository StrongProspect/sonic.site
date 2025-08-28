import { Link, redirect } from "react-router";
import type { Route } from "../public/+types/signup";
import { Input } from "~/components/shared/input";
import { useCallback, useMemo, useState } from "react";
import useApi from "~/hooks/useApi";
import type { IUserCreatedDto } from "~/interfaces/api/users/IUserCreatedDto";
import type { IUserLoginDto } from "~/interfaces/api/users/IUserLoginDto";
import { commitSession, getSession } from "~/sessions.server";

interface ICreateUser extends IUserLoginDto {
  email: string;
}

export async function loader({ request }: Route.LoaderArgs) {
  // TODO: Implement your loader logic here
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  const { makeRequestAsync, authenticate } = useApi();

  const form = await request.formData();
  const username = form.get("username")!.toString();
  const email = form.get("email")!.toString();
  const password = form.get("password")!.toString();

  try {
    const [createdUser, status] = await makeRequestAsync<
      IUserCreatedDto,
      ICreateUser
    >(null, "account", [{ type: "path", value: "register" }], "POST", {
      email,
      username,
      password,
    });

    if (status === 201) {
      const session = await getSession(request.headers.get("Cookie"));

      const [{ accessToken, expiration, refreshToken }, status] =
        await authenticate({ username, password });

      session.set("auth", accessToken);
      session.set("expiration", expiration);
      session.set("refreshToken", refreshToken);

      const commit = await commitSession(session);

      return redirect("/gigs-tours", {
        headers: {
          "Set-Cookie": commit,
        },
      });
    }
  } catch (ex) {
    // Handle more gracefully
    throw ex;
  }

  //add status handling
  throw "Something went wrong...";
}

function checkPasswordStrength(password: string) {
  let score = 0;
  let strength = "❌❌ Very Weak Password";

  const criteria = [
    password.length >= 12,
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /[0-9]/.test(password),
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  ];

  criteria.forEach((c) => c == true && score++);

  switch (score) {
    case 0:
      strength = "";
      break;
    case 1:
      strength = "😩 Why even try";
      break;
    case 2:
      strength = "🤷 It could be worse";
      break;
    case 3:
      strength = "💿 On the right track";
      break;
    case 4:
      strength = "🍳🥓 SIzzling";
      break;
    case 5:
    case 6:
      strength = "🔥🔥 Flaming hot! 🔥🔥";
      break;
    default:
      strength = "";
  }

  return strength;
}

export default function Signup({ loaderData }: Route.ComponentProps) {
  const [passwordStrength, setPasswordStrength] = useState("");

  return (
    <div className="max-w-screen">
      {/* {error ? <div className="error">{error}</div> : null} */}
      <form method="POST" className="max-w-full">
        <div className="flex flex-col space-y-4 bg-white rounded-xl shadow-lg p-6 lg:max-w-[50rem] max-w-96 mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-800">
            Get Rolling
          </h2>
          <Input name="username" id="username" required={true} type="text" />
          <Input name="email" id="email" required={true} type="email" />
          <Input
            name="password"
            id="password"
            required={true}
            type="password"
            onChange={(e) =>
              setPasswordStrength(checkPasswordStrength(e.target?.value))
            }
          />
          <h4 className="mx-auto">{passwordStrength}</h4>
          <div className="text-center">
            <Link to="/login">Already have an account? Login here!</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-md max-w-60 mx-auto"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
