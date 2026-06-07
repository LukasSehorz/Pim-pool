import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/pool-chlorfrei/faq-ionisierung")({
  head: () => ({
    meta: [
      { title: `${CONTENT["faq-ionisierung"].title} – POOLCAP` },
      { name: "description", content: CONTENT["faq-ionisierung"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["faq-ionisierung"]} />;
}
