import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/weitere-produkte/waermepumpen")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
