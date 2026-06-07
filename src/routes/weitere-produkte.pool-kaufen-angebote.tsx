import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/pool-kaufen-angebote")({
  head: () => ({
    meta: [
      { title: `${CONTENT["pool-kaufen-angebote"].title} – POOLCAP` },
      { name: "description", content: CONTENT["pool-kaufen-angebote"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["pool-kaufen-angebote"]} />;
}
