import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/horizon")({
  head: () => ({
    meta: [
      { title: `${CONTENT["horizon"].title} – POOLCAP` },
      { name: "description", content: CONTENT["horizon"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["horizon"]} />;
}
