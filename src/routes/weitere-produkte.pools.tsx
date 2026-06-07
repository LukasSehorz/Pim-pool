import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/pools")({
  head: () => ({
    meta: [
      { title: `${CONTENT["pools"].title} – POOLCAP` },
      { name: "description", content: CONTENT["pools"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["pools"]} />;
}
