import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FolienFaecher } from "@/components/FolienFaecher";
import { FolienDesigns } from "@/components/FolienDesigns";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/folien-farben-design")({
  head: () => ({
    meta: [
      { title: "Folien Farben/Design – pim POOL" },
      {
        name: "description",
        content:
          "Hochwertige RENOLIT Alkorplan Poolfolien, glasfaserverstärkt, robust und in vielen Farben und Oberflächen. Als zertifizierter RENOLIT Fachverleger finden wir Ihre Wunschfolie.",
      },
    ],
  }),
  component: FolienPage,
});

function FolienPage() {
  return (
    <>
      <PageHero
        eyebrow="Folien Farben/Design"
        title="Folien, Farben & Design"
        subtitle="Als zertifizierter RENOLIT Fachverleger kleiden wir Ihr Becken in robusten Folien aus, für ein langlebiges und stilvolles Poolerlebnis."
        crumbs={[{ label: "Folien Farben/Design" }]}
        image="/images/Folien Design/Hero Section Folien & Design.png"
        ctaLabel="Jetzt Wunsch-Design auswählen"
        ctaTo="/kontakt"
      />

      <FolienFaecher />

      <FolienDesigns />

      <CTASection
        title="Welche Folie passt zu Ihrem Pool?"
        text="Wir beraten Sie persönlich zu Farben, Oberflächen und Designs – unverbindlich und kostenfrei."
        primary="Jetzt zur Folienberatung"
      />
    </>
  );
}
