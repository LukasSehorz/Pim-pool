import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/sun-sky")({
  head: () => ({
    meta: [
      { title: `${CONTENT["sun-sky"].title} – POOLCAP` },
      { name: "description", content: CONTENT["sun-sky"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["sun-sky"]} />;
}
