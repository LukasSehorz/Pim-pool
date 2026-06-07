import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/orion5")({
  head: () => ({
    meta: [
      { title: `${CONTENT["orion5"].title} – POOLCAP` },
      { name: "description", content: CONTENT["orion5"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["orion5"]} />;
}
