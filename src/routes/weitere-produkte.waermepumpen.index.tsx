import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/waermepumpen/")({
  head: () => ({
    meta: [
      { title: `${CONTENT["waermepumpen"].title} – POOLCAP` },
      { name: "description", content: CONTENT["waermepumpen"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["waermepumpen"]} />;
}
