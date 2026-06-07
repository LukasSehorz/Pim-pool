import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/umwaelzpumpen")({
  head: () => ({
    meta: [
      { title: `${CONTENT["umwaelzpumpen"].title} – POOLCAP` },
      { name: "description", content: CONTENT["umwaelzpumpen"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["umwaelzpumpen"]} />;
}
