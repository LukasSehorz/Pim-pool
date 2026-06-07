import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/pool-chlorfrei")({
  head: () => ({
    meta: [
      { title: `${CONTENT["pool-chlorfrei"].title} – POOLCAP` },
      { name: "description", content: CONTENT["pool-chlorfrei"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["pool-chlorfrei"]} />;
}
