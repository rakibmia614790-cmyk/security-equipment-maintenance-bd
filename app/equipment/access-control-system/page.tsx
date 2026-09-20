import { redirect } from "next/navigation";

export default function LegacyRouteRedirect() {
  redirect("/equipment/access-control");
}
