import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolueberdachungen/galaxy")({
  head: () => ({
    meta: [
      { title: `${CONTENT["galaxy"].title} – POOLCAP` },
      { name: "description", content: CONTENT["galaxy"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["galaxy"]} />;
}
