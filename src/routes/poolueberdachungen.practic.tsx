import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/practic")({
  head: () => ({
    meta: [
      { title: `${CONTENT["practic"].title} – POOLCAP` },
      { name: "description", content: CONTENT["practic"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["practic"]} />;
}
