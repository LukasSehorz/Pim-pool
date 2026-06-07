import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/was-ist-eine-rolloabdeckung")({
  head: () => ({
    meta: [
      { title: `${CONTENT["was-ist-eine-rolloabdeckung"].title} – POOLCAP` },
      { name: "description", content: CONTENT["was-ist-eine-rolloabdeckung"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["was-ist-eine-rolloabdeckung"]} />;
}
