import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/weitere-produkte/reinigungsroboter")({
  head: () => ({
    meta: [
      { title: `${CONTENT["reinigungsroboter"].title} – POOLCAP` },
      { name: "description", content: CONTENT["reinigungsroboter"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["reinigungsroboter"]} />;
}
