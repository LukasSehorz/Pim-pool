import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/aircover-winterabdeckung")({
  head: () => ({
    meta: [
      { title: `${CONTENT["aircover-winterabdeckung"].title} – POOLCAP` },
      { name: "description", content: CONTENT["aircover-winterabdeckung"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["aircover-winterabdeckung"]} />;
}
