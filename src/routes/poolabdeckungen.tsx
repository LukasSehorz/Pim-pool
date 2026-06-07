import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/poolabdeckungen")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
