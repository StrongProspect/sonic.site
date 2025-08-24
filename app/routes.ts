import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

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
    layout("components/shared/authorized.tsx", [
      layout("components/shared/dashboard.tsx", [
        route("/toolbox", "routes/authorized/toolbox.tsx"),
        route("/gigs-tours", "routes/authorized/gigs_tours.tsx"),
        route("/money", "routes/authorized/money.tsx"),
        route("/promo", "routes/authorized/promo.tsx"),
        route("/settings", "routes/authorized/settings.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
