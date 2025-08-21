import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("components/shared/layout.tsx", [
    index("routes/public/home.tsx"),
    route("/login", "routes/public/login.tsx"),
    route("/blog", "routes/public/blog.tsx"),
    route("/help", "routes/public/help.tsx"),
    route("/terms", "routes/public/terms.tsx"),
    route("/tools", "routes/public/tools.tsx"),
    route("/why", "routes/public/why.tsx"),
    layout("components/shared/authenticated.tsx", [
      route("/dashboard", "routes/authorized/dashboard.tsx"),
      route("/gigs_tours", "routes/authorized/gigs_tours.tsx"),
      route("/money", "routes/authorized/money.tsx"),
      route("/promo", "routes/authorized/promo.tsx"),
      route("/login", "routes/authorized/settings.tsx"),
      route("/login", "routes/authorized/toolbox.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
