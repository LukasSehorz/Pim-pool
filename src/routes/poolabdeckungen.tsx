import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen")({
  head: () => ({
    meta: [
      { title: `${CONTENT["poolabdeckungen"].title} – POOLCAP` },
      { name: "description", content: CONTENT["poolabdeckungen"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["poolabdeckungen"]} />;
}
