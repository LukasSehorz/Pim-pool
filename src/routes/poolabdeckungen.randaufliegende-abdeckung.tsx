import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/randaufliegende-abdeckung")({
  head: () => ({
    meta: [
      { title: `${CONTENT["randaufliegende-abdeckung"].title} – POOLCAP` },
      { name: "description", content: CONTENT["randaufliegende-abdeckung"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["randaufliegende-abdeckung"]} />;
}
