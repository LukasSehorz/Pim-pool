import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/weitere-produkte/wasserbehandlung")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
