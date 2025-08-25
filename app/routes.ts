import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export enum PrivateRoute {
  Toolbox = "/toolbox",
  Shows = "/gigs-tours",
  Money = "/money",
  Promo = "/promo",
  Settings = "/settings",
}

export default [
  layout("components/shared/layout.tsx", [
    index("routes/public/home.tsx"),
    route("/signup", "routes/public/signup.tsx"),
    route("/login", "routes/public/login.tsx"),
    route("/blog", "routes/public/blog.tsx"),
    route("/help", "routes/public/help.tsx"),
    route("/privacy", "routes/public/privacy.tsx"),
    route("/terms", "routes/public/terms.tsx"),
    route("/tools", "routes/public/tools.tsx"),
    route("/why", "routes/public/why.tsx"),
    layout("components/shared/dashboard.tsx", [
      route(PrivateRoute.Toolbox, "routes/authorized/toolbox.tsx"),
      route(PrivateRoute.Shows, "routes/authorized/gigs_tours.tsx"),
      route(PrivateRoute.Money, "routes/authorized/money.tsx"),
      route(PrivateRoute.Promo, "routes/authorized/promo.tsx"),
      route(PrivateRoute.Settings, "routes/authorized/settings.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
