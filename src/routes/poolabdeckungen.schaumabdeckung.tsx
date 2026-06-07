import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/schaumabdeckung")({
  head: () => ({
    meta: [
      { title: `${CONTENT["schaumabdeckung"].title} – POOLCAP` },
      { name: "description", content: CONTENT["schaumabdeckung"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["schaumabdeckung"]} />;
}
