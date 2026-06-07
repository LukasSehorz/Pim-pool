import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/wasserbehandlung/asin-salt")({
  head: () => ({
    meta: [
      { title: `${CONTENT["asin-salt"].title} – POOLCAP` },
      { name: "description", content: CONTENT["asin-salt"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["asin-salt"]} />;
}
