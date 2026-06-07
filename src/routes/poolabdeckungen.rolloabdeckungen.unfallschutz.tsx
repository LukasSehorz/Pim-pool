import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/unfallschutz")({
  head: () => ({
    meta: [
      { title: `${CONTENT["unfallschutz"].title} – POOLCAP` },
      { name: "description", content: CONTENT["unfallschutz"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["unfallschutz"]} />;
}
