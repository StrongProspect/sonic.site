import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Sonic DIY" }, { name: "description", content: "" }];
}

export default function Home() {
  return <Welcome />;
}
