import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum – POOLCAP" }] }),
  component: () => (
    <>
      <PageHero title="Impressum" crumbs={[{ label: "Impressum" }]} />
      <section className="container-page py-16 max-w-3xl text-foreground/85 leading-relaxed space-y-6">
        <div>
          <h2 className="text-xl font-bold">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">{COMPANY.full}<br />{COMPANY.street}<br />{COMPANY.zip} {COMPANY.city}<br />Deutschland</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Kontakt</h2>
          <p className="mt-2">Telefon: {COMPANY.phone}<br />E-Mail: {COMPANY.email}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Haftungshinweis</h2>
          <p className="mt-2">Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Urheberrecht</h2>
          <p className="mt-2">Die durch die Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht.</p>
        </div>
      </section>
    </>
  ),
});
