import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/harmonie")({
  head: () => ({
    meta: [
      { title: `${CONTENT["harmonie"].title} – POOLCAP` },
      { name: "description", content: CONTENT["harmonie"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["harmonie"]} />;
}
