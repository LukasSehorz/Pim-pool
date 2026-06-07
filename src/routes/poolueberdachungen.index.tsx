import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/")({
  head: () => ({
    meta: [
      { title: `${CONTENT["poolueberdachungen"].title} – POOLCAP` },
      { name: "description", content: CONTENT["poolueberdachungen"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["poolueberdachungen"]} />;
}