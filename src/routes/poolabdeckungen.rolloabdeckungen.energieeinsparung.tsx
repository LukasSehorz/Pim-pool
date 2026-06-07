import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/energieeinsparung")({
  head: () => ({
    meta: [
      { title: `${CONTENT["energieeinsparung"].title} – POOLCAP` },
      { name: "description", content: CONTENT["energieeinsparung"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["energieeinsparung"]} />;
}
