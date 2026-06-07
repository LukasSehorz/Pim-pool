import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/wasserbehandlung/pp-10-floc-c")({
  head: () => ({
    meta: [
      { title: `${CONTENT["pp-10-floc-c"].title} – POOLCAP` },
      { name: "description", content: CONTENT["pp-10-floc-c"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["pp-10-floc-c"]} />;
}
