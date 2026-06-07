import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/visual")({
  head: () => ({
    meta: [
      { title: `${CONTENT["visual"].title} – POOLCAP` },
      { name: "description", content: CONTENT["visual"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["visual"]} />;
}
