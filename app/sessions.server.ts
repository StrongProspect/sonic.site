import { createCookieSessionStorage } from "react-router";
import type { ITokenResponseDto } from "./interfaces/api/users/ITokenResponseDto";

type SessionData = {
  auth: ITokenResponseDto["accessToken"];
  expiration: ITokenResponseDto["expiration"];
  refreshToken: ITokenResponseDto["refreshToken"];
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "session",

      // all of these are optional
      domain: "localhost",
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      httpOnly: true,
      // maxAge: 60,
      // path: "/",
      sameSite: "lax",
      // make dynamic/configureable secrets?
      // secrets: [
      //   "s3cr3t",
      // ],
      secure: false,
    },
  });

export { getSession, commitSession, destroySession };
