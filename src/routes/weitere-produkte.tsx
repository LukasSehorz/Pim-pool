import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte")({
  head: () => ({
    meta: [
      { title: `${CONTENT["weitere-produkte"].title} – POOLCAP` },
      { name: "description", content: CONTENT["weitere-produkte"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["weitere-produkte"]} />;
}
