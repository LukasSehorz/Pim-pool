import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/technische-details")({
  head: () => ({
    meta: [
      { title: `${CONTENT["ueberdachung-technische-details"].title} – POOLCAP` },
      { name: "description", content: CONTENT["ueberdachung-technische-details"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["ueberdachung-technische-details"]} />;
}
