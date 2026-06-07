import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

const c = CONTENT["pp-10-floc-c"];

export const Route = createFileRoute("/weitere-produkte/wasserbehandlung/pp-10-floc-c")({
  head: () => ({
    meta: [
      { title: `${c.title} – POOLCAP` },
      { name: "description", content: c.subtitle },
    ],
  }),
  component: () => <ProductPage content={c} />,
});
