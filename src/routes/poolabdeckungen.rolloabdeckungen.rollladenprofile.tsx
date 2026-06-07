import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { CONTENT } from "@/lib/content";

const c = CONTENT["rollladenprofile"];

export const Route = createFileRoute("/poolabdeckungen/rolloabdeckungen/rollladenprofile")({
  head: () => ({
    meta: [
      { title: `${c.title} – POOLCAP` },
      { name: "description", content: c.subtitle },
    ],
  }),
  component: () => <ProductPage content={c} />,
});
