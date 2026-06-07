import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/orion")({
  head: () => ({
    meta: [
      { title: `${CONTENT["orion"].title} – POOLCAP` },
      { name: "description", content: CONTENT["orion"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["orion"]} />;
}
