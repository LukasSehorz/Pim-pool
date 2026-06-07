import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/unterfluranlagen")({
  head: () => ({
    meta: [
      { title: `${CONTENT["unterfluranlagen"].title} – POOLCAP` },
      { name: "description", content: CONTENT["unterfluranlagen"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["unterfluranlagen"]} />;
}
