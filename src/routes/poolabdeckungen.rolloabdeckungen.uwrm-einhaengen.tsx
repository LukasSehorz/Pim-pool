import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/uwrm-einhaengen")({
  head: () => ({
    meta: [
      { title: `${CONTENT["uwrm-einhaengen"].title} – POOLCAP` },
      { name: "description", content: CONTENT["uwrm-einhaengen"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["uwrm-einhaengen"]} />;
}
