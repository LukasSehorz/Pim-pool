import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/solaranlage")({
  head: () => ({
    meta: [
      { title: `${CONTENT["solaranlage"].title} – POOLCAP` },
      { name: "description", content: CONTENT["solaranlage"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["solaranlage"]} />;
}
