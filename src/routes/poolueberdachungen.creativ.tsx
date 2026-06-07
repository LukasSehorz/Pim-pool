import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/creativ")({
  head: () => ({
    meta: [
      { title: `${CONTENT["creativ"].title} – POOLCAP` },
      { name: "description", content: CONTENT["creativ"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["creativ"]} />;
}
