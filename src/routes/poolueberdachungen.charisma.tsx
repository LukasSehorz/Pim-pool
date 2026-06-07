import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/charisma")({
  head: () => ({
    meta: [
      { title: `${CONTENT["charisma"].title} – POOLCAP` },
      { name: "description", content: CONTENT["charisma"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["charisma"]} />;
}
