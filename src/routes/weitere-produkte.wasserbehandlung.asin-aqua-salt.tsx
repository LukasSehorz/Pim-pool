import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/wasserbehandlung/asin-aqua-salt")({
  head: () => ({
    meta: [
      { title: `${CONTENT["asin-aqua-salt"].title} – POOLCAP` },
      { name: "description", content: CONTENT["asin-aqua-salt"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["asin-aqua-salt"]} />;
}
