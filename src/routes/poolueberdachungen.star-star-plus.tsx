import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/star-star-plus")({
  head: () => ({
    meta: [
      { title: `${CONTENT["star-star-plus"].title} – POOLCAP` },
      { name: "description", content: CONTENT["star-star-plus"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["star-star-plus"]} />;
}
