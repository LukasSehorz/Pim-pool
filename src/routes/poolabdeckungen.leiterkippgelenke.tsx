import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/leiterkippgelenke")({
  head: () => ({
    meta: [
      { title: `${CONTENT["leiterkippgelenke"].title} – POOLCAP` },
      { name: "description", content: CONTENT["leiterkippgelenke"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["leiterkippgelenke"]} />;
}
