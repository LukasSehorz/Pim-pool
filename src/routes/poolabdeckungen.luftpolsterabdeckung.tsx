import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/luftpolsterabdeckung")({
  head: () => ({
    meta: [
      { title: `${CONTENT["luftpolsterabdeckung"].title} – POOLCAP` },
      { name: "description", content: CONTENT["luftpolsterabdeckung"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["luftpolsterabdeckung"]} />;
}
