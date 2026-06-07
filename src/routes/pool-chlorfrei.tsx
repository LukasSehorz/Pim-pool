import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/pool-chlorfrei")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
