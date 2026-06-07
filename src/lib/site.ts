export type NavChild = { label: string; to: string; children?: NavChild[] };

export const COMPANY = {
  name: "POOLCAP",
  full: "POOLCAP – Schwimmbadabdeckungen & Wassertechnik",
  street: "Höllriegelskreuther Weg 3",
  zip: "82065",
  city: "Baierbrunn",
  region: "Großraum München, Bayern",
  phone: "+49 89 793 60 387",
  phoneHref: "tel:+498979360387",
  email: "info@poolcap.de",
  youtube: "https://www.youtube.com/",
  since: "2000",
  hours: [
    { d: "Mo – Fr", h: "09:00 – 17:00" },
    { d: "Sa", h: "Nach Vereinbarung" },
    { d: "So", h: "Geschlossen" },
  ],
};

export const NAV: NavChild[] = [
  {
    label: "Poolabdeckungen",
    to: "/poolabdeckungen",
    children: [
      {
        label: "Rolloabdeckungen",
        to: "/poolabdeckungen/rolloabdeckungen",
        children: [
          { label: "Unterfluranlagen", to: "/poolabdeckungen/rolloabdeckungen/unterfluranlagen" },
          { label: "Oberfluranlagen", to: "/poolabdeckungen/rolloabdeckungen/oberfluranlagen" },
          { label: "Unfallschutz", to: "/poolabdeckungen/rolloabdeckungen/unfallschutz" },
          { label: "Energieeinsparung", to: "/poolabdeckungen/rolloabdeckungen/energieeinsparung" },
          { label: "Rollladenprofile", to: "/poolabdeckungen/rolloabdeckungen/rollladenprofile" },
          { label: "Was ist eine Rolloabdeckung?", to: "/poolabdeckungen/rolloabdeckungen/was-ist-eine-rolloabdeckung" },
        ],
      },
      { label: "Schaumabdeckung", to: "/poolabdeckungen/schaumabdeckung" },
      { label: "Randaufliegende Abdeckung", to: "/poolabdeckungen/randaufliegende-abdeckung" },
      { label: "Luftpolsterabdeckung (Solar)", to: "/poolabdeckungen/luftpolsterabdeckung" },
      { label: "Schutz-, Winter- & Sicherheitsnetz", to: "/poolabdeckungen/schutz-winter-sicherheitsnetz" },
      { label: "Aircover Winterabdeckung", to: "/poolabdeckungen/aircover-winterabdeckung" },
    ],
  },
  {
    label: "Poolüberdachungen",
    to: "/poolueberdachungen",
    children: [
      { label: "Horizon", to: "/poolueberdachungen/horizon" },
      { label: "Star & Star-Plus", to: "/poolueberdachungen/star-star-plus" },
      { label: "Visual", to: "/poolueberdachungen/visual" },
      { label: "Sun & Sky", to: "/poolueberdachungen/sun-sky" },
      { label: "Charisma flat", to: "/poolueberdachungen/charisma-flat" },
      { label: "Harmonie", to: "/poolueberdachungen/harmonie" },
      { label: "Practic", to: "/poolueberdachungen/practic" },
      { label: "Creativ", to: "/poolueberdachungen/creativ" },
      { label: "Orion", to: "/poolueberdachungen/orion" },
      { label: "Charisma", to: "/poolueberdachungen/charisma" },
      { label: "Orion5", to: "/poolueberdachungen/orion5" },
      { label: "Galaxy", to: "/poolueberdachungen/galaxy" },
      { label: "Rondo", to: "/poolueberdachungen/rondo" },
      { label: "Technische Details", to: "/poolueberdachungen/technische-details" },
    ],
  },
  {
    label: "Pool chlorfrei",
    to: "/pool-chlorfrei",
    children: [
      { label: "FAQ zur Ionisierung", to: "/pool-chlorfrei/faq-ionisierung" },
    ],
  },
  {
    label: "Weitere Produkte",
    to: "/weitere-produkte",
    children: [
      { label: "Pool Solaranlage", to: "/weitere-produkte/solaranlage" },
      { label: "Pool Reinigungsroboter", to: "/weitere-produkte/reinigungsroboter" },
      { label: "Pools (Einstück-Fertigbecken)", to: "/weitere-produkte/pools" },
      { label: "Pool kaufen – Angebote", to: "/weitere-produkte/pool-kaufen-angebote" },
      { label: "Wärmepumpen", to: "/weitere-produkte/waermepumpen" },
      { label: "Umwälzpumpen", to: "/weitere-produkte/umwaelzpumpen" },
      {
        label: "Wasserbehandlung (ASEKO)",
        to: "/weitere-produkte/wasserbehandlung",
        children: [
          { label: "Asin Aqua Oxygen", to: "/weitere-produkte/wasserbehandlung/asin-aqua-oxygen" },
          { label: "Asin Aqua Home", to: "/weitere-produkte/wasserbehandlung/asin-aqua-home" },
          { label: "Asin Aqua Salt", to: "/weitere-produkte/wasserbehandlung/asin-aqua-salt" },
          { label: "Asin Salt", to: "/weitere-produkte/wasserbehandlung/asin-salt" },
          { label: "Asin Aqua Profi", to: "/weitere-produkte/wasserbehandlung/asin-aqua-profi" },
          { label: "PP 60 pH", to: "/weitere-produkte/wasserbehandlung/pp-60-ph" },
          { label: "PP 10 Floc+C", to: "/weitere-produkte/wasserbehandlung/pp-10-floc-c" },
        ],
      },
    ],
  },
  { label: "Kontakt", to: "/kontakt" },
];
