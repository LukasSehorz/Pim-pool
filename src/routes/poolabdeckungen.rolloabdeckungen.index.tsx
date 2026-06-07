import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/")({
  head: () => ({
    meta: [
      { title: `${CONTENT["rolloabdeckungen"].title} – POOLCAP` },
      { name: "description", content: CONTENT["rolloabdeckungen"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["rolloabdeckungen"]} />;
}