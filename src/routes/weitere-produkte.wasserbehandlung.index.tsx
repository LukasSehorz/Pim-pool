import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/wasserbehandlung/")({
  head: () => ({
    meta: [
      { title: `${CONTENT["wasserbehandlung"].title} – POOLCAP` },
      { name: "description", content: CONTENT["wasserbehandlung"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["wasserbehandlung"]} />;
}