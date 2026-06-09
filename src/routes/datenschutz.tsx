import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz – pim POOL" }] }),
  component: () => (
    <>
      <PageHero title="Datenschutzerklärung" crumbs={[{ label: "Datenschutz" }]} />
      <section className="container-page py-16 max-w-3xl text-foreground/85 leading-relaxed space-y-6">
        <p>Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).</p>

        <div>
          <h2 className="text-xl font-bold">1. Verantwortlicher</h2>
          <p className="mt-2">{COMPANY.full}, {COMPANY.street}, {COMPANY.zip} {COMPANY.city}, {COMPANY.phone}, {COMPANY.email}.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">2. Kontaktaufnahme</h2>
          <p className="mt-2">Bei Kontakt mit uns per Formular oder E-Mail werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">3. Ihre Rechte</h2>
          <p className="mt-2">Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit. Sie können jederzeit Beschwerde bei der zuständigen Aufsichtsbehörde einreichen.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">4. Cookies & Analyse</h2>
          <p className="mt-2">Diese Website setzt nur technisch notwendige Cookies ein. Es findet keine personenbezogene Auswertung statt.</p>
        </div>
      </section>
    </>
  ),
});
