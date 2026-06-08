import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/aussenliegender-antrieb")({
  head: () => ({
    meta: [
      { title: `${CONTENT["aussenliegender-antrieb"].title} – POOLCAP` },
      { name: "description", content: CONTENT["aussenliegender-antrieb"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["aussenliegender-antrieb"]} />;
}
