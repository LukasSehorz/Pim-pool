import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/rollladenprofile")({
  head: () => ({
    meta: [
      { title: `${CONTENT["rollladenprofile"].title} – POOLCAP` },
      { name: "description", content: CONTENT["rollladenprofile"].subtitle },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductPage content={CONTENT["rollladenprofile"]} />;
}
