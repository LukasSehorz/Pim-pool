import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/wasserbehandlung/asin-aqua-profi")({
  head: () => ({
    meta: [
      { title: `${CONTENT["asin-aqua-profi"].title} – POOLCAP` },
      { name: "description", content: CONTENT["asin-aqua-profi"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["asin-aqua-profi"]} />;
}
