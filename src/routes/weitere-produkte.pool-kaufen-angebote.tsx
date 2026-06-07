import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

const c = CONTENT["pool-kaufen-angebote"];

export const Route = createFileRoute("/weitere-produkte/pool-kaufen-angebote")({
  head: () => ({
    meta: [
      { title: `${c.title} – POOLCAP` },
      { name: "description", content: c.subtitle },
    ],
  }),
  component: () => <ProductPage content={c} />,
});
