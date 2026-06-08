import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/waermepumpen/dr-smart")({
  head: () => ({
    meta: [
      { title: `${CONTENT["waermepumpe-dr-smart"].title} – POOLCAP` },
      { name: "description", content: CONTENT["waermepumpe-dr-smart"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["waermepumpe-dr-smart"]} />;
}
