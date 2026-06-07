import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/wasserbehandlung/pp-60-ph")({
  head: () => ({
    meta: [
      { title: `${CONTENT["pp-60-ph"].title} – POOLCAP` },
      { name: "description", content: CONTENT["pp-60-ph"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["pp-60-ph"]} />;
}
