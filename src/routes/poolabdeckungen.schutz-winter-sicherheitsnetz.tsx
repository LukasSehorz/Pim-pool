import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/schutz-winter-sicherheitsnetz")({
  head: () => ({
    meta: [
      { title: `${CONTENT["schutz-winter-sicherheitsnetz"].title} – POOLCAP` },
      { name: "description", content: CONTENT["schutz-winter-sicherheitsnetz"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["schutz-winter-sicherheitsnetz"]} />;
}
