import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

// export default [
//   layout("layouts/main.tsx", [
//     // layout wraps in shared UI -> use the <Outlet /> component from react-router
//     index("routes/login.tsx"), // index handles default views
//     //route("tours/:tourId", "routes/tour.tsx"), // route maps a path to a component
//   ]),
// ] satisfies RouteConfig;

export default [
  // index("routes/login.tsx"),
  route("/login", "routes/login.tsx"),
  route("/home", "routes/home.tsx"),
] satisfies RouteConfig;
