import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/charisma-flat")({
  head: () => ({
    meta: [
      { title: `${CONTENT["charisma-flat"].title} – POOLCAP` },
      { name: "description", content: CONTENT["charisma-flat"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["charisma-flat"]} />;
}
