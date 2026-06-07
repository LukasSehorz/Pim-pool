import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/fahrbares-pooldeck")({
  head: () => ({
    meta: [
      { title: `${CONTENT["fahrbares-pooldeck"].title} – POOLCAP` },
      { name: "description", content: CONTENT["fahrbares-pooldeck"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["fahrbares-pooldeck"]} />;
}
