import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/waermepumpen/mr-perfect")({
  head: () => ({
    meta: [
      { title: `${CONTENT["waermepumpe-mr-perfect"].title} – POOLCAP` },
      { name: "description", content: CONTENT["waermepumpe-mr-perfect"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["waermepumpe-mr-perfect"]} />;
}
