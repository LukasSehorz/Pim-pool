import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/rondo")({
  head: () => ({
    meta: [
      { title: `${CONTENT["rondo"].title} – POOLCAP` },
      { name: "description", content: CONTENT["rondo"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["rondo"]} />;
}
