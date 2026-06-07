import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/oberfluranlagen")({
  head: () => ({
    meta: [
      { title: `${CONTENT["oberfluranlagen"].title} – POOLCAP` },
      { name: "description", content: CONTENT["oberfluranlagen"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["oberfluranlagen"]} />;
}
