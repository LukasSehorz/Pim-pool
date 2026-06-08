import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/waermepumpen/dr-silence")({
  head: () => ({
    meta: [
      { title: `${CONTENT["waermepumpe-dr-silence"].title} – POOLCAP` },
      { name: "description", content: CONTENT["waermepumpe-dr-silence"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["waermepumpe-dr-silence"]} />;
}
