import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/poolueberdachungen")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
