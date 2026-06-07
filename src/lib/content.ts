import type { ProductContent } from "@/components/ProductPage";

const baseBenefits = [
  { title: "Energieeinsparung", text: "Bis zu 70 % weniger Wärmeverlust – spürbar niedrigere Heiz- und Stromkosten." },
  { title: "Sicherheit", text: "Zuverlässiger Schutz für Kinder und Haustiere – Sicherheit, die man sieht." },
  { title: "Komfort", text: "Bedienung per Knopfdruck oder App – Pool öffnen war noch nie so einfach." },
  { title: "Werterhalt", text: "Schützt Wasser und Technik vor Schmutz, UV und Witterung – langfristig." },
];

const PRODUCT_LABELS: Record<string, string> = {
  poolabdeckungen: "Poolabdeckungen",
  rolloabdeckungen: "Rolloabdeckungen",
  unterfluranlagen: "Unterfluranlagen",
  oberfluranlagen: "Oberfluranlagen",
  unfallschutz: "Unfallschutz",
  energieeinsparung: "Energieeinsparung",
  rollladenprofile: "Rollladenprofile",
  "was-ist-eine-rolloabdeckung": "Rolloabdeckungen",
  schaumabdeckung: "Schaumabdeckung",
  "randaufliegende-abdeckung": "randaufliegende Abdeckungen",
  luftpolsterabdeckung: "Luftpolsterabdeckungen",
  "schutz-winter-sicherheitsnetz": "Schutz-, Winter- und Sicherheitsnetze",
  "aircover-winterabdeckung": "Aircover Winterabdeckungen",
  horizon: "Horizon",
  "star-star-plus": "Star & Star-Plus",
  visual: "Visual",
  "sun-sky": "Sun & Sky",
  "charisma-flat": "Charisma flat",
  harmonie: "Harmonie",
  practic: "Practic",
  creativ: "Creativ",
  orion: "Orion",
  charisma: "Charisma",
  orion5: "Orion5",
  galaxy: "Galaxy",
  rondo: "Rondo",
  "ueberdachung-technische-details": "Poolüberdachungen",
  "pool-chlorfrei": "chlorfreie Pools",
  "faq-ionisierung": "Ionisierung",
  "weitere-produkte": "Pooltechnik",
  "fahrbares-pooldeck": "fahrbare Pooldecks",
  solaranlage: "Pool-Solaranlagen",
  reinigungsroboter: "Pool-Reinigungsroboter",
  pools: "Einstück-Fertigbecken",
  "pool-kaufen-angebote": "Pool-Komplettangebote",
  waermepumpen: "Wärmepumpen",
  umwaelzpumpen: "Umwälzpumpen",
  wasserbehandlung: "ASEKO Wasserbehandlung",
  "asin-aqua-oxygen": "ASIN AQUA Oxygen",
  "asin-aqua-home": "ASIN AQUA Home",
  "asin-aqua-salt": "ASIN AQUA Salt",
  "asin-salt": "ASIN Salt",
  "asin-aqua-profi": "ASIN AQUA Profi",
  "pp-60-ph": "PP 60 pH",
  "pp-10-floc-c": "PP 10 Floc+C",
};

const SPECIFIC_BENEFITS: Record<string, ProductContent["benefits"]> = {
  "fahrbares-pooldeck": [
    { title: "Mehr Gartenfläche", text: "Der Pool verschwindet unter einer nutzbaren Terrasse – ideal für kompakte Grundstücke." },
    { title: "Maximale Sicherheit", text: "Geschlossen entsteht eine stabile, harte Fläche statt offener Wasserfläche." },
    { title: "Architektur-Effekt", text: "Holz, WPC oder Steinoptik machen das Deck zum Design-Statement." },
    { title: "Weniger Schmutz", text: "Laub, Staub und UV-Strahlung bleiben draußen – Wasser und Folie werden geschützt." },
  ],
  solaranlage: [
    { title: "Kostenlose Wärme", text: "Sonnenenergie erwärmt Ihr Poolwasser ohne laufende Energiekosten." },
    { title: "Lange Saison", text: "In Bayern oft mehrere Wochen früher baden und länger im Herbst genießen." },
    { title: "Robuste Absorber", text: "UV-stabile Solarabsorber arbeiten leise, wartungsarm und zuverlässig." },
    { title: "Perfekte Kombination", text: "Ideal mit Wärmepumpe und Abdeckung für maximale Effizienz." },
  ],
  reinigungsroboter: [
    { title: "Boden & Wand sauber", text: "Intelligente Programme reinigen Boden, Wände und Wasserlinie automatisch." },
    { title: "Mehr Freizeit", text: "Kein Kescher, keine Bürste – der Roboter übernimmt die Routinearbeit." },
    { title: "Feine Filterung", text: "Laub, Sand und Schwebstoffe werden im eigenen Filterkorb gesammelt." },
    { title: "Passend zum Becken", text: "Wir empfehlen das Modell nach Poolform, Oberfläche und Verschmutzung." },
  ],
  pools: [
    { title: "Schneller Einbau", text: "Ein Fertigbecken kann oft innerhalb eines Tages gesetzt werden." },
    { title: "Glatte Oberfläche", text: "Hochwertige Beckenoberflächen sind angenehm, langlebig und pflegeleicht." },
    { title: "Planbare Kosten", text: "Klare Pakete reduzieren Überraschungen bei Bauzeit und Budget." },
    { title: "Technik aus einer Hand", text: "Abdeckung, Heizung und Wasseraufbereitung werden direkt mitgedacht." },
  ],
  "pool-kaufen-angebote": [
    { title: "Komplettpaket", text: "Becken, Technik, Abdeckung und Zubehör werden sinnvoll vorkonfiguriert." },
    { title: "Faire Auswahl", text: "Wir empfehlen nur, was zu Grundstück, Budget und Nutzung passt." },
    { title: "München & Bayern", text: "Beratung, Lieferung und Montage mit regionaler Erfahrung." },
    { title: "Schneller Vergleich", text: "Sie sehen sofort, welche Ausstattung wirklich Mehrwert bringt." },
  ],
  waermepumpen: [
    { title: "Hoher COP", text: "Inverter-Technik gewinnt aus wenig Strom viel Wärme für Ihr Wasser." },
    { title: "Leiser Betrieb", text: "Moderne Ventilatoren und Kompressoren arbeiten angenehm zurückhaltend." },
    { title: "Automatisch geregelt", text: "Die Zieltemperatur wird konstant gehalten – ohne tägliches Nachstellen." },
    { title: "Bayern-tauglich", text: "Auslegung passend zu Poolgröße, Abdeckung und lokaler Witterung." },
  ],
  umwaelzpumpen: [
    { title: "Strom sparen", text: "Variable Drehzahlen senken den Verbrauch im Dauerbetrieb deutlich." },
    { title: "Klares Wasser", text: "Stabile Umwälzung verbessert Filtration und Wasserhygiene." },
    { title: "Leise Technik", text: "Premium-Pumpen laufen vibrationsarm und unauffällig." },
    { title: "Smart steuerbar", text: "Laufzeiten lassen sich an Filter, Heizung und Dosierung anpassen." },
  ],
};

function benefitsFor(slug: string): ProductContent["benefits"] {
  if (SPECIFIC_BENEFITS[slug]) return SPECIFIC_BENEFITS[slug];
  const label = PRODUCT_LABELS[slug] ?? "diese Lösung";
  return baseBenefits.map((benefit) => ({
    ...benefit,
    text: `${benefit.text} Speziell ausgelegt für ${label} und Ihre Poolsituation in Bayern.`,
  }));
}

function getEnclosureDetail(slug: string) {
  const details: Record<string, { subtitle: string; description: string[]; faq: ProductContent["faq"] }> = {
    horizon: { subtitle: "Ultraflach, elegant und fast unsichtbar – für minimalistische Architektur.", description: ["Horizon ist die richtige Wahl, wenn die Überdachung optisch so zurückhaltend wie möglich bleiben soll. Die flache Linienführung schützt den Pool, ohne Gartenarchitektur oder Sichtachsen zu dominieren.", "Durch die geringe Bauhöhe bleibt der Blick über die Wasserfläche frei. Gleichzeitig profitieren Sie von Wärmespeicherung, Schmutzschutz und längerer Badesaison.", "Empfohlen für moderne Neubauten, klare Terrassenanlagen und Eigentümer, die kompromisslos cleanes Design wünschen."], faq: [{ q: "Kann man unter Horizon schwimmen?", a: "Horizon ist bewusst ultraflach. Zum Schwimmen wird die Überdachung meist geöffnet." }] },
    "star-star-plus": { subtitle: "Der beliebte Allrounder: mehr Höhe, mehr Komfort, mehr Spielraum für Familien.", description: ["Star & Star-Plus bieten deutlich mehr Innenraum als ultraflache Modelle und bleiben dennoch elegant. Ideal, wenn Kinder auch bei wechselhaftem Wetter spielen oder Sie den Pool häufiger teilgeschlossen nutzen möchten.", "Die Plus-Variante eignet sich für größere Spannweiten und anspruchsvollere Beckenbreiten. Türen und Klappen können alltagstauglich geplant werden.", "Eine sehr ausgewogene Lösung für Familienpools im Großraum München."], faq: [{ q: "Was unterscheidet Star und Star-Plus?", a: "Star-Plus bietet je nach Ausführung mehr Breite, Höhe und Stabilitätsreserven." }] },
    visual: { subtitle: "Maximale Transparenz für Wasser, Garten und Licht ohne schwere Optik.", description: ["Visual setzt auf besonders klare Flächen und reduzierte Profile. Dadurch wirkt die Überdachung offen, hell und fast rahmenlos.", "Die Konstruktion schützt zuverlässig vor Wind und Schmutz, ohne den Blick aufs Wasser zu nehmen. Gerade bei Designpools ist Visual ein starker Kompromiss aus Schutz und Ästhetik.", "POOLCAP stimmt Flächen, Profilfarbe und Schienenführung harmonisch auf Ihr Grundstück ab."], faq: [{ q: "Bleibt die Überdachung lange klar?", a: "Mit passender Pflege behalten die transparenten Flächen dauerhaft ein hochwertiges Erscheinungsbild." }] },
    "sun-sky": { subtitle: "Viel Licht, spürbarer Wärmeeintrag und ein helles Raumgefühl rund um Ihren Pool.", description: ["Sun & Sky ist für Poolbesitzer gemacht, die ein helles, offenes Badegefühl schätzen. Die großzügige Bauform fängt Sonnenwärme ein und schützt vor kühlem Wind.", "Unter der Überdachung entsteht ein geschützter Badebereich, der besonders in Frühjahr und Herbst deutlich mehr Komfort bietet.", "Optional planen wir Einstiege, Türen und Lüftungsmöglichkeiten passend zu Terrasse und Nutzung."], faq: [{ q: "Wird das Wasser wärmer?", a: "Ja, der Treibhauseffekt kann die Wassertemperatur spürbar erhöhen." }] },
    "charisma-flat": { subtitle: "Flach, hochwertig und repräsentativ – die Designlinie für exklusive Privatpools.", description: ["Charisma flat verbindet die ruhige Optik einer Flachüberdachung mit besonders wertiger Linienführung. Sie passt zu modernen Villen, Naturstein-Terrassen und klar gestalteten Außenbereichen.", "Die niedrige Bauform reduziert den visuellen Eingriff, während Schmutzschutz, Sicherheitsgewinn und Wärmerückhalt voll erhalten bleiben.", "Bei POOLCAP erhalten Sie eine individuelle Abstimmung von Profilfarbe, Segmentaufteilung und Bedienkomfort."], faq: [{ q: "Passt sie zu Naturstein-Terrassen?", a: "Sehr gut. Die ruhige Linienführung wirkt besonders hochwertig neben Stein und Beton." }] },
    harmonie: { subtitle: "Klassische Rundform mit ausgewogenen Proportionen – zeitlos, robust und familienfreundlich.", description: ["Harmonie ist die bewährte Wahl für Poolbesitzer, die eine weiche, klassische Form und zuverlässige Funktion suchen. Die Bogenform leitet Regen und Schnee gut ab.", "Die Anlage lässt sich einfach schieben, sicher verriegeln und in vielen Größen anpassen. Sie bietet guten Innenraum bei moderater Optik.", "Ideal für Bestandsbecken, Familiengärten und langlebige Alltagsnutzung."], faq: [{ q: "Ist Harmonie wintertauglich?", a: "Ja, bei korrekter Auslegung ist die Konstruktion auch für Schnee und Winterbetrieb geeignet." }] },
    practic: { subtitle: "Die funktionale Lösung für zuverlässigen Schutz ohne unnötige Extras.", description: ["Practic konzentriert sich auf das Wesentliche: stabile Konstruktion, einfache Bedienung, guter Schmutzschutz und attraktive Wirtschaftlichkeit.", "Sie eignet sich besonders für Bestandsbecken, Ferienhäuser und Poolbesitzer, die eine robuste Überdachung mit fairem Preis-Leistungs-Verhältnis suchen.", "POOLCAP achtet trotzdem auf saubere Schienenführung, passende Dimensionierung und langlebige Materialien."], faq: [{ q: "Ist Practic eine Einstiegslösung?", a: "Ja – aber keine Billiglösung. Sie ist robust und bewusst funktional gehalten." }] },
    creativ: { subtitle: "Für besondere Beckenformen, spezielle Terrassen und individuelle architektonische Wünsche.", description: ["Creativ ist die Lösung, wenn Standard nicht reicht. Ungewöhnliche Beckenformen, asymmetrische Terrassen oder besondere Schienenführungen werden individuell geplant.", "Statt Ihren Garten an die Überdachung anzupassen, passen wir die Überdachung an Ihren Garten an – technisch sauber und optisch stimmig.", "Gerade bei Sanierungen und hochwertigen Sonderprojekten ist Creativ oft die eleganteste Wahl."], faq: [{ q: "Sind Sonderformen möglich?", a: "Ja, Creativ ist genau für individuelle Geometrien gedacht." }] },
    orion: { subtitle: "Die hohe Überdachung für echtes Raumgefühl – schwimmen, gehen und entspannen unter Dach.", description: ["Orion schafft einen geschützten Poolraum. Anders als flache Modelle erlaubt sie mehr Bewegungsfreiheit und eignet sich für alle, die den Pool auch bei kühlerem Wetter aktiv nutzen möchten.", "Die hohe Konstruktion schützt vor Wind, speichert Wärme und macht den Poolbereich fast zu einem Sommer-Wintergarten.", "Besonders attraktiv für Familien, Vielschwimmer und Grundstücke mit großzügiger Poolzone."], faq: [{ q: "Kann man unter Orion stehen?", a: "Je nach Ausführung ja – die Höhe wird passend zur Nutzung geplant." }] },
    charisma: { subtitle: "Die repräsentative Premium-Überdachung für gehobene Poolanlagen.", description: ["Charisma ist die Designlinie für Poolbesitzer mit hohem Anspruch an Optik, Materialwirkung und Bedienkomfort. Sie wirkt weniger wie Zubehör – mehr wie ein architektonisches Element.", "Die Kombination aus klaren Profilen, hochwertigen Flächen und durchdachten Details macht Charisma zur starken Wahl für repräsentative Außenbereiche.", "Wir planen die Anlage so, dass sie Terrasse, Haus und Garten sichtbar aufwertet."], faq: [{ q: "Was macht Charisma besonders?", a: "Die hochwertige Gestaltung, Materialauswahl und klare Premium-Anmutung." }] },
    orion5: { subtitle: "XL-Komfort: eine großzügige Poolhalle für Schwimmen, Aufenthalt und wettergeschützte Nutzung.", description: ["Orion5 erweitert die Idee der Poolüberdachung in Richtung Poolhalle. Mit zusätzlicher Höhe und Raumtiefe entsteht ein Bereich, der deutlich mehr Nutzung ermöglicht.", "Ideal, wenn Liegeflächen, Sitzbereiche oder ein ganzer Poolraum unter der Überdachung entstehen sollen.", "POOLCAP plant Zugänge, Lüftung, Schienen und Statik passend zur Größe und Schneelast in Bayern."], faq: [{ q: "Ist Orion5 für große Pools geeignet?", a: "Ja, sie ist für großzügige Spannweiten und Komfortnutzung ausgelegt." }] },
    galaxy: { subtitle: "Maximaler Raum, viel Glaswirkung und luxuriöses Badegefühl – auch bei schlechtem Wetter.", description: ["Galaxy ist die große, repräsentative Überdachung für Kunden, die ihren Poolbereich wie einen hochwertigen Wellnessraum nutzen möchten.", "Die Konstruktion eignet sich für große Privatpools, Hotelanlagen oder anspruchsvolle Wellnessbereiche. Wärme bleibt länger erhalten, Wind und Regen verlieren ihren Schrecken.", "Mit passender Ausstattung entsteht ein Poolraum, der deutlich über die klassische Überdachung hinausgeht."], faq: [{ q: "Ist Galaxy eher eine Poolhalle?", a: "Ja, sie geht in Richtung großzügiger Poolraum mit hoher Aufenthaltsqualität." }] },
    rondo: { subtitle: "Rund, elegant und ideal für Whirlpools, runde Becken oder besondere Garteninseln.", description: ["Rondo ist die passende Überdachung für runde oder organische Poolformen. Die Form wirkt weich, elegant und eignet sich hervorragend für Wellnessbereiche und Whirlpools.", "Durch die Kuppelwirkung entsteht ein angenehmes Raumgefühl, während Wasser und Technik zuverlässig vor Schmutz und Witterung geschützt werden.", "Eine starke Lösung, wenn Ihr Pool nicht rechteckig gedacht ist – sondern als Designobjekt im Garten."], faq: [{ q: "Passt Rondo für Whirlpools?", a: "Ja, besonders für Whirlpools und runde Becken ist Rondo sehr beliebt." }] },
  };
  return details[slug];
}

function getAsekoDetail(slug: string) {
  const details: Record<string, { subtitle: string; description: string[]; faq: ProductContent["faq"] }> = {
    "asin-aqua-oxygen": { subtitle: "Automatische Wasserpflege mit Aktivsauerstoff – besonders angenehm für Haut und Augen.", description: ["ASIN AQUA Oxygen ist ideal für Poolbesitzer, die möglichst chlorarm baden möchten. Das System misst und dosiert automatisch Aktivsauerstoff und pH-Regulierung.", "Das Ergebnis ist angenehm weiches Wasser ohne starken Chlorgeruch – perfekt für Familien, empfindliche Haut und hochwertige Privatpools.", "POOLCAP übernimmt Installation, Kalibrierung und Einweisung, damit die Wasserpflege dauerhaft zuverlässig läuft."], faq: [{ q: "Ist Oxygen komplett chlorfrei?", a: "Es arbeitet mit Aktivsauerstoff; je nach Belastung kann eine minimale Ergänzung sinnvoll sein." }] },
    "asin-aqua-home": { subtitle: "Die smarte Komplettlösung für private Pools – messen, regeln, dosieren, entspannen.", description: ["ASIN AQUA Home überwacht wichtige Wasserwerte und dosiert automatisch die passende Menge Pflegemittel. Damit bleibt Ihr Poolwasser stabil, klar und hygienisch.", "Die Anlage ist kompakt, übersichtlich und für private Technikräume konzipiert. Sie reduziert Bedienfehler und sorgt für konstant hochwertige Wasserqualität.", "Ideal für Poolbesitzer, die zuverlässige Automatisierung wünschen, aber keine gewerbliche Profi-Anlage benötigen."], faq: [{ q: "Kann ich Werte per App prüfen?", a: "Je nach Ausstattung lassen sich Daten komfortabel überwachen." }] },
    "asin-aqua-salt": { subtitle: "Salzelektrolyse plus automatische Regelung – weiches Wasser mit hohem Komfort.", description: ["ASIN AQUA Salt verbindet Salzelektrolyse mit intelligenter Mess- und Dosiertechnik. Aus leicht salzhaltigem Wasser wird Desinfektionswirkung direkt im System erzeugt.", "Das Wasser fühlt sich weicher an, der typische Chlorgeruch wird reduziert und die Nachdosierung läuft kontrolliert automatisch.", "Eine Premiumlösung für moderne Privatpools, bei denen Komfort und Wassergefühl gleichermaßen wichtig sind."], faq: [{ q: "Schmeckt das Wasser salzig?", a: "Nein, die Salzkonzentration ist deutlich niedriger als im Meer und kaum wahrnehmbar." }] },
    "asin-salt": { subtitle: "Robuste Salzelektrolyse für einfache und zuverlässige Desinfektion.", description: ["ASIN Salt konzentriert sich auf die zuverlässige Erzeugung von Desinfektion über Salzelektrolyse. Das System ist robust, übersichtlich und eine starke Alternative zur klassischen Chlordosierung.", "Gerade bei bestehenden Pools kann ASIN Salt ein sinnvoller Modernisierungsschritt sein, wenn Wassergefühl und Bedienkomfort verbessert werden sollen.", "POOLCAP prüft dafür Beckenvolumen, vorhandene Technik und Kompatibilität Ihrer Ausstattung."], faq: [{ q: "Kann ASIN Salt nachgerüstet werden?", a: "In vielen Technikräumen ja – wir prüfen die hydraulische Einbindung vor Ort." }] },
    "asin-aqua-profi": { subtitle: "Die leistungsstarke Dosierlösung für große Privatpools, Hotels und gewerbliche Anlagen.", description: ["ASIN AQUA Profi ist für anspruchsvolle Anwendungen gemacht: große Becken, höhere Nutzungsfrequenz, präzise Regelung und professionelle Betriebssicherheit.", "Das System misst kontinuierlich und dosiert exakt – wichtig für gleichbleibende Hygiene, Dokumentation und zuverlässigen Badebetrieb.", "POOLCAP übernimmt Planung, fachgerechte Integration und Einweisung für Betreiber und Hausmeisterservice."], faq: [{ q: "Für private Pools überdimensioniert?", a: "Für normale Privatpools meist ja; bei großen Anlagen kann Profi sinnvoll sein." }] },
    "pp-60-ph": { subtitle: "Präzise pH-Dosierpumpe – die Basis für stabiles, klares Poolwasser.", description: ["PP 60 pH sorgt dafür, dass der pH-Wert Ihres Pools zuverlässig im optimalen Bereich bleibt. Das ist die Grundlage für wirksame Desinfektion und angenehmes Wassergefühl.", "Die Dosierpumpe eignet sich als gezielte Ergänzung bestehender Anlagen oder als Baustein in einer modernisierten Wassertechnik.", "POOLCAP dimensioniert Dosierleistung, Kanisterplatz und Einbindung passend zu Ihrem Technikraum."], faq: [{ q: "Warum ist pH-Regelung so wichtig?", a: "Nur im passenden pH-Bereich wirken Pflegemittel zuverlässig und das Wasser bleibt angenehm." }] },
    "pp-10-floc-c": { subtitle: "Gezielte Dosierung von Flockungsmittel und Chlor – für sichtbar klareres Wasser.", description: ["PP 10 Floc+C unterstützt die Wasserpflege dort, wo feinste Trübstoffe oder zusätzliche Desinfektion präzise dosiert werden sollen. Flockungsmittel verbessert die Filterleistung sichtbar.", "Die Pumpe eignet sich für Pools mit hohem Klarheitsanspruch, stärkerer Nutzung oder als Ergänzung vorhandener Mess- und Regeltechnik.", "Wir stimmen Dosiermenge und Mittelwahl auf Filteranlage, Beckenvolumen und gewünschte Wasserqualität ab."], faq: [{ q: "Was bringt Flockungsmittel?", a: "Feinste Partikel werden gebunden und können vom Filter besser zurückgehalten werden." }] },
  };
  return details[slug];
}

const make = (
  slug: string,
  title: string,
  subtitle: string,
  eyebrow: string,
  description: string[],
  crumbs?: ProductContent["crumbs"],
  related?: ProductContent["related"],
  faq?: ProductContent["faq"],
): [string, ProductContent] => [
  slug,
  {
    eyebrow,
    title,
    subtitle,
    description,
    benefits: benefitsFor(slug),
    crumbs,
    related,
    faq,
  },
];

export const CONTENT: Record<string, ProductContent> = Object.fromEntries([
  // === POOLABDECKUNGEN ===
  make(
    "poolabdeckungen",
    "Poolabdeckungen: Schutz, Wärme, Sicherheit – auf Knopfdruck",
    "Vom motorisierten Rollladen bis zur klassischen Winterabdeckung – wir finden die perfekte Lösung für Ihren Pool.",
    "Übersicht",
    [
      "Eine hochwertige Poolabdeckung ist die wirtschaftlichste Investition in Ihren Pool: Sie spart Heiz- und Wasserkosten, hält Schmutz draußen und erhöht spürbar die Sicherheit.",
      "Bei POOLCAP profitieren Sie von über 25 Jahren Erfahrung. Wir beraten Sie ehrlich und liefern ausschließlich Systeme in geprüfter Hersteller-Qualität.",
    ],
    [{ label: "Poolabdeckungen" }],
    [
      { label: "Rolloabdeckungen", to: "/poolabdeckungen/rolloabdeckungen" },
      { label: "Schaumabdeckung", to: "/poolabdeckungen/schaumabdeckung" },
      { label: "Solarabdeckung", to: "/poolabdeckungen/luftpolsterabdeckung" },
    ],
  ),
  make(
    "rolloabdeckungen",
    "Rolloabdeckungen: Premiumschutz mit nur einem Knopfdruck",
    "Automatische Lamellenabdeckungen, die Ihren Pool sicherer, sauberer und wärmer machen – Tag für Tag.",
    "Rolloabdeckungen",
    [
      "Eine Rolloabdeckung ist die eleganteste und komfortabelste Form der Poolabdeckung. Sie liegt formschön auf dem Wasser, schließt randdicht ab und wird per Schlüsselschalter oder Fernbedienung gesteuert.",
      "Wählen Sie zwischen eleganten Unterfluranlagen, die unsichtbar im Pool integriert sind, und kostengünstigeren Oberfluranlagen am Beckenrand.",
    ],
    [{ label: "Poolabdeckungen", to: "/poolabdeckungen" }, { label: "Rolloabdeckungen" }],
    [
      { label: "Unterfluranlagen", to: "/poolabdeckungen/rolloabdeckungen/unterfluranlagen" },
      { label: "Oberfluranlagen", to: "/poolabdeckungen/rolloabdeckungen/oberfluranlagen" },
      { label: "Energieeinsparung", to: "/poolabdeckungen/rolloabdeckungen/energieeinsparung" },
    ],
  ),
  make(
    "unterfluranlagen",
    "Unterfluranlagen: Unsichtbar elegant – sichtbar überzeugend",
    "Die Rolloabdeckung verschwindet komplett im Pool. Maximaler Komfort, minimale Optik-Störung.",
    "Unterfluranlage",
    [
      "Bei einer Unterfluranlage wird die aufgewickelte Abdeckung in einem separaten Schacht innerhalb des Pools versteckt. Das Ergebnis: ein optisch ungestörter, eleganter Pool – jederzeit bereit zum Schwimmen.",
      "Wir planen die Anlage gemeinsam mit Ihnen und Ihrem Poolbauer und sorgen für eine wasserdichte, langlebige Integration.",
    ],
    [
      { label: "Poolabdeckungen", to: "/poolabdeckungen" },
      { label: "Rolloabdeckungen", to: "/poolabdeckungen/rolloabdeckungen" },
      { label: "Unterfluranlagen" },
    ],
  ),
  make(
    "oberfluranlagen",
    "Oberfluranlagen: Premium-Schutz ohne Umbau",
    "Die clevere Lösung für bestehende Pools – schnell montiert, ohne baulichen Aufwand.",
    "Oberfluranlage",
    [
      "Die Oberfluranlage wird am Beckenrand oder auf einem dezenten Sockel montiert. Ideal für Bestandspools, die nachträglich mit einer automatischen Rolloabdeckung ausgestattet werden sollen.",
      "Verschiedene Designs und Edelstahl- oder Aluminium-Ausführungen integrieren sich harmonisch in Ihren Garten.",
    ],
    [
      { label: "Poolabdeckungen", to: "/poolabdeckungen" },
      { label: "Rolloabdeckungen", to: "/poolabdeckungen/rolloabdeckungen" },
      { label: "Oberfluranlagen" },
    ],
  ),
  make(
    "unfallschutz",
    "Unfallschutz: Sicherheit, auf die Familien sich verlassen",
    "Eine geschlossene Rolloabdeckung kann eine Person tragen – aktiver Schutz vor dem Hineinfallen.",
    "Sicherheit",
    [
      "Eine vollständig geschlossene Rolloabdeckung schützt Kinder und Haustiere zuverlässig vor dem unbeaufsichtigten Hineinfallen ins Wasser – und gibt Ihnen ein Stück Ruhe zurück.",
      "Wir setzen ausschließlich auf geprüfte Profile und Antriebstechnik, die hohen Belastungen standhalten.",
    ],
    [
      { label: "Poolabdeckungen", to: "/poolabdeckungen" },
      { label: "Rolloabdeckungen", to: "/poolabdeckungen/rolloabdeckungen" },
      { label: "Unfallschutz" },
    ],
  ),
  make(
    "energieeinsparung",
    "Energieeinsparung: Bis zu 70 % weniger Verbrauch",
    "Eine geschlossene Abdeckung halbiert Wärmeverluste, Verdunstung und Chemikalienverbrauch.",
    "Energieersparnis",
    [
      "Über 90 % der Wärmeverluste eines Pools entstehen an der Wasseroberfläche. Eine geschlossene Rolloabdeckung wirkt wie ein Deckel auf der Tasse: Sie hält Wärme im Wasser und reduziert die Verdunstung um bis zu 98 %.",
      "Das bedeutet konkret: deutlich geringere Heizkosten, weniger Frischwasser- und Chemikalienverbrauch – und eine wesentlich kürzere Aufheizzeit.",
    ],
    [
      { label: "Poolabdeckungen", to: "/poolabdeckungen" },
      { label: "Rolloabdeckungen", to: "/poolabdeckungen/rolloabdeckungen" },
      { label: "Energieeinsparung" },
    ],
  ),
  make(
    "rollladenprofile",
    "Rollladenprofile: Das Herzstück Ihrer Abdeckung",
    "Hochwertige Polycarbonat- und PVC-Lamellen – farblich auf Ihr Pooldesign abgestimmt.",
    "Lamellen",
    [
      "Unsere Rollladenprofile sind UV- und chlorbeständig, schlagfest und in vielen Farben erhältlich. Solarprofile gewinnen zusätzlich Wärme aus der Sonneneinstrahlung.",
      "Premium-Polycarbonat-Profile zeichnen sich durch besonders hohe Lebensdauer und ein edles, dezentes Erscheinungsbild aus.",
    ],
    [
      { label: "Poolabdeckungen", to: "/poolabdeckungen" },
      { label: "Rolloabdeckungen", to: "/poolabdeckungen/rolloabdeckungen" },
      { label: "Rollladenprofile" },
    ],
  ),
  make(
    "was-ist-eine-rolloabdeckung",
    "Was ist eine Rolloabdeckung? Einfach erklärt",
    "Funktion, Vorteile und Einsatzgebiete der wohl beliebtesten automatischen Poolabdeckung.",
    "Ratgeber",
    [
      "Eine Rolloabdeckung besteht aus miteinander verbundenen Kunststoff-Lamellen, die auf einer Welle aufgerollt werden. Per Knopfdruck wird die Abdeckung über den Pool gefahren oder wieder eingerollt.",
      "Sie kombiniert Bedienkomfort, Sicherheit, Energieeinsparung und ein hochwertiges Erscheinungsbild – die Allround-Lösung für moderne Pools.",
    ],
    [
      { label: "Poolabdeckungen", to: "/poolabdeckungen" },
      { label: "Rolloabdeckungen", to: "/poolabdeckungen/rolloabdeckungen" },
      { label: "Was ist eine Rolloabdeckung?" },
    ],
    undefined,
    [
      { q: "Wie lange hält eine Rolloabdeckung?", a: "Bei normaler Nutzung und korrekter Pflege erreichen unsere Systeme problemlos 15–20 Jahre Lebensdauer." },
      { q: "Funktioniert die Abdeckung bei jedem Pool?", a: "Wir liefern Lösungen für nahezu jede Beckenform – rechteckig, römisch, oval oder freie Formen." },
      { q: "Wie wird die Abdeckung gesteuert?", a: "Klassisch per Schlüsselschalter, alternativ über Funkfernbedienung oder Smart-Home-App." },
    ],
  ),
  make(
    "schaumabdeckung",
    "Schaumabdeckung: Leichter Premiumschutz für Ihren Pool",
    "Schwimmende Abdeckung aus geschlossenzelligem Schaum – ideal als Wärmespeicher und Sicherheitselement.",
    "Schaumabdeckung",
    [
      "Die Schaumabdeckung kombiniert hohe Isolierwirkung mit geringem Gewicht. Sie wird einfach auf das Wasser gelegt und kann bei Bedarf zusammengerollt werden.",
      "Eine wirtschaftliche Lösung, die Wärme speichert und Verdunstung deutlich reduziert.",
    ],
    [{ label: "Poolabdeckungen", to: "/poolabdeckungen" }, { label: "Schaumabdeckung" }],
  ),
  make(
    "randaufliegende-abdeckung",
    "Randaufliegende Abdeckung: Maßgeschneiderter Schutz",
    "Stabile Abdeckung, die exakt auf den Beckenrand passt – elegant und besonders sicher.",
    "Randaufliegend",
    [
      "Diese Abdeckungsform liegt vollflächig auf dem Beckenrand auf und wird mit Spanngurten gesichert. Sie schützt das Wasser zuverlässig vor Schmutz und sorgt für ein aufgeräumtes Gesamtbild.",
      "Auf Wunsch mit begehbarer Ausführung als zusätzlicher Sicherheitsfaktor.",
    ],
    [{ label: "Poolabdeckungen", to: "/poolabdeckungen" }, { label: "Randaufliegende Abdeckung" }],
  ),
  make(
    "luftpolsterabdeckung",
    "Luftpolster-Solarabdeckung: Sonne tanken, kostenlos heizen",
    "Die clevere Folie, die Wärme von der Sonne ins Wasser transportiert – ohne Strom, ohne Aufwand.",
    "Solarabdeckung",
    [
      "Unsere Luftpolster-Solarabdeckungen erzeugen einen passiven Heizeffekt: Tagsüber wird Sonnenenergie absorbiert und ins Wasser geleitet, nachts wird die gespeicherte Wärme im Pool gehalten.",
      "Die wirtschaftlichste Lösung, um die Badesaison spürbar zu verlängern.",
    ],
    [{ label: "Poolabdeckungen", to: "/poolabdeckungen" }, { label: "Luftpolsterabdeckung" }],
  ),
  make(
    "schutz-winter-sicherheitsnetz",
    "Schutz-, Winter- & Sicherheitsnetz: Robust durch jede Saison",
    "Engmaschige Netze, die Ihren Pool im Winter schützen und ganzjährig Sicherheit bieten.",
    "Sicherheitsnetz",
    [
      "Unsere Sicherheitsnetze tragen das Gewicht eines Kindes, sind UV-stabil und langlebig. Im Winter halten Sie Laub und Schmutz fern – im Sommer dienen sie als zusätzlicher Schutz.",
      "Montage und Demontage erfolgen schnell und werkzeuglos.",
    ],
    [{ label: "Poolabdeckungen", to: "/poolabdeckungen" }, { label: "Schutz-, Winter- & Sicherheitsnetz" }],
  ),
  make(
    "aircover-winterabdeckung",
    "Aircover Winterabdeckung: Aufblasbar, leicht, genial",
    "Die innovative aufblasbare Winterabdeckung – schnell montiert, extrem effektiv gegen Frost und Schmutz.",
    "Aircover",
    [
      "Die Aircover wird einfach auf den Pool gelegt und aufgeblasen. Das Luftkissen trägt Schnee und Regenwasser zuverlässig ab und schützt Folie und Pool zuverlässig vor Frostschäden.",
      "Ein- und Ausbau in unter 30 Minuten – ohne Spezialwerkzeug.",
    ],
    [{ label: "Poolabdeckungen", to: "/poolabdeckungen" }, { label: "Aircover Winterabdeckung" }],
  ),

  // === POOLÜBERDACHUNGEN ===
  make(
    "poolueberdachungen",
    "Poolüberdachungen: Wetterunabhängig schwimmen – das ganze Jahr",
    "Vom flachen Schiebedach bis zur eleganten Pavillon-Lösung – elegante Überdachungen, die Ihren Pool aufwerten.",
    "Übersicht",
    [
      "Eine Poolüberdachung verlängert Ihre Badesaison um mehrere Monate und schützt das Wasser zuverlässig vor Schmutz, Wind und Witterung. Gleichzeitig steigt die Wassertemperatur durch den Treibhauseffekt um mehrere Grad.",
      "Wir bieten alle führenden Modelle – flach, mittelhoch oder begehbar – in vielen Farben und Sondermaßen.",
    ],
    [{ label: "Poolüberdachungen" }],
  ),
  ...modelLineup([
    ["horizon", "Horizon", "Die ultraflache Premium-Überdachung mit cleanem Linienspiel."],
    ["star-star-plus", "Star & Star-Plus", "Die mittelhohe All-Round-Lösung mit beeindruckendem Raumgefühl."],
    ["visual", "Visual", "Maximale Transparenz – fast wie ohne Dach."],
    ["sun-sky", "Sun & Sky", "Lichtdurchflutete Überdachung mit großzügiger Höhe."],
    ["charisma-flat", "Charisma flat", "Die elegante Flachüberdachung im Premium-Design."],
    ["harmonie", "Harmonie", "Klassische Form, harmonische Proportionen."],
    ["practic", "Practic", "Robust, funktional, preislich attraktiv – die clevere Wahl."],
    ["creativ", "Creativ", "Kreative Formen für individuelle Poolgrundrisse."],
    ["orion", "Orion", "Die elegante hohe Überdachung mit begehbarem Komfort."],
    ["charisma", "Charisma", "Premium-Linie mit besonderem Designanspruch."],
    ["orion5", "Orion5", "Die XL-Variante – Wintergarten und Pool in einem."],
    ["galaxy", "Galaxy", "Maximaler Raum, hochwertige Verglasung, edle Optik."],
    ["rondo", "Rondo", "Die runde Pavillon-Überdachung für freie Becken."],
  ]),
  make(
    "ueberdachung-technische-details",
    "Poolüberdachung – Technische Details",
    "Materialien, Profile, Sicherheit, Steuerung: Alles, was Sie zur Technik wissen sollten.",
    "Technik",
    [
      "Unsere Überdachungen bestehen aus eloxierten Aluminiumprofilen und schlagfesten Polycarbonatplatten – wartungsarm, langlebig und ästhetisch.",
      "Auf Wunsch ausgestattet mit Sicherheitsschlössern, Motorisierung und Wind-Verriegelungen.",
    ],
    [{ label: "Poolüberdachungen", to: "/poolueberdachungen" }, { label: "Technische Details" }],
  ),

  // === POOL CHLORFREI ===
  make(
    "pool-chlorfrei",
    "Pool chlorfrei: Kristallklares Wasser ohne aggressive Chemie",
    "Genießen Sie Badespaß ganz ohne Chlorgeruch – durch moderne Ionisierungs- und Sauerstoffsysteme.",
    "Chlorfrei",
    [
      "Mit den richtigen Systemen lässt sich Ihr Pool nahezu chlorfrei betreiben – sanft zur Haut, ohne Geruch und ohne gereizte Augen.",
      "Wir setzen auf bewährte Technologien wie Kupfer-Silber-Ionisierung und Aktivsauerstoff in Kombination mit professioneller Mess- und Regeltechnik von ASEKO.",
    ],
    [{ label: "Pool chlorfrei" }],
  ),
  make(
    "faq-ionisierung",
    "Ionisierung: Häufige Fragen einfach beantwortet",
    "Was ist Ionisierung? Wie sicher ist sie? Wie wirkt sie? Antworten von Ihrem POOLCAP-Team.",
    "FAQ",
    [
      "Die Kupfer-Silber-Ionisierung ist eine seit Jahrzehnten bewährte Methode, um Wasser auf natürliche Weise hygienisch zu halten. Sie ergänzt oder ersetzt klassische Chlordosierung weitgehend.",
    ],
    [{ label: "Pool chlorfrei", to: "/pool-chlorfrei" }, { label: "FAQ Ionisierung" }],
    undefined,
    [
      { q: "Ist ionisiertes Wasser sicher?", a: "Ja – die freigesetzten Ionen sind in sehr geringen, völlig unbedenklichen Mengen aktiv und werden weltweit eingesetzt." },
      { q: "Benötige ich noch zusätzliches Chlor?", a: "Eine sehr geringe Restdosis kann je nach Beanspruchung sinnvoll sein – meist deutlich unter 0,3 mg/l." },
      { q: "Spüre ich einen Unterschied beim Baden?", a: "Definitiv – das Wasser wirkt weicher, die Haut ist nach dem Baden nicht mehr trocken, kein Chlorgeruch." },
    ],
  ),

  // === WEITERE PRODUKTE ===
  make(
    "weitere-produkte",
    "Weitere Produkte: Alles, was Ihr Pool zum Strahlen braucht",
    "Von Wärmepumpen über Reinigungsroboter bis zu professioneller Wasserbehandlung – aus einer Hand.",
    "Übersicht",
    [
      "Wir sind Ihr Komplettanbieter rund um den Pool. Bei uns erhalten Sie alle relevanten Komponenten in geprüfter Qualität – inklusive Beratung, Lieferung und Inbetriebnahme.",
    ],
    [{ label: "Weitere Produkte" }],
  ),
  make(
    "fahrbares-pooldeck",
    "Fahrbares Pooldeck: Terrasse und Poolabdeckung in einem",
    "Die spektakulärste Premiumlösung für moderne Gärten: Ihr Pool verschwindet unter einer nutzbaren Design-Terrasse.",
    "Pooldeck",
    [
      "Ein fahrbares Pooldeck ist mehr als eine Abdeckung – es verwandelt die Wasserfläche auf Knopfdruck in wertvolle Nutzfläche. Besonders in München und Umgebung, wo Grundstücke oft hochwertig geplant werden, entsteht so ein maximal eleganter Mehrwert.",
      "Das Deck läuft auf stabilen Schienen, wird millimetergenau auf Beckenform und Terrassenbelag abgestimmt und schützt den Pool zuverlässig vor Schmutz, UV-Strahlung und unbeaufsichtigtem Zugang.",
      "POOLCAP plant das System mit Ihnen architektonisch sauber: Belag, Laufrichtung, Bedienung, Entwässerung und Sicherheitsdetails werden exakt auf Garten, Pool und Alltag abgestimmt.",
    ],
    [{ label: "Weitere Produkte", to: "/weitere-produkte" }, { label: "Fahrbares Pooldeck" }],
    [
      { label: "Pools (Einstück-Fertigbecken)", to: "/weitere-produkte/pools" },
      { label: "Poolabdeckungen", to: "/poolabdeckungen" },
      { label: "Pool kaufen – Angebote", to: "/weitere-produkte/pool-kaufen-angebote" },
    ],
    [
      { q: "Ist ein fahrbares Pooldeck begehbar?", a: "Ja. Es wird als stabile Nutzfläche geplant und kann – je nach Konstruktion – wie eine Terrasse genutzt werden." },
      { q: "Eignet sich das auch für Bestandsbecken?", a: "Oft ja. Entscheidend sind Beckenrand, Platz für die Laufschienen und die gewünschte Parkposition des Decks." },
      { q: "Welche Beläge sind möglich?", a: "Typisch sind WPC, Holz, Steinoptik oder keramische Beläge – passend zur bestehenden Terrasse." },
    ],
  ),
  make(
    "solaranlage",
    "Pool Solaranlage: Kostenlose Sonnenwärme für Ihr Wasser",
    "Verlängern Sie die Saison spürbar – mit moderner Solartechnik, die in Bayern beste Erträge liefert.",
    "Solar",
    [
      "Unsere Pool-Solaranlagen heizen Ihr Wasser zuverlässig und energieneutral – ideal als Ergänzung zu Wärmepumpe oder klassischer Heizung.",
    ],
    [{ label: "Weitere Produkte", to: "/weitere-produkte" }, { label: "Solaranlage" }],
  ),
  make(
    "reinigungsroboter",
    "Pool Reinigungsroboter: Saubere Becken ohne Aufwand",
    "Vollautomatische Roboter, die Boden, Wände und Wasserlinie zuverlässig reinigen – jeden Tag.",
    "Roboter",
    [
      "Hochwertige Pool-Roboter sparen Stunden manueller Arbeit. Wir führen ausschließlich Geräte mit erstklassiger Reinigungsleistung und langer Lebensdauer.",
    ],
    [{ label: "Weitere Produkte", to: "/weitere-produkte" }, { label: "Reinigungsroboter" }],
  ),
  make(
    "pools",
    "Pools (Einstück-Fertigbecken): Premium aus einem Guss",
    "Einstück-Fertigbecken in hochwertiger Keramik- oder GFK-Qualität – schnell montiert, jahrzehntelang schön.",
    "Pools",
    [
      "Einstück-Fertigbecken werden im Werk vorgefertigt und in einem Tag in Ihren Garten gehoben. Das spart Zeit, Kosten und liefert höchste Materialqualität.",
    ],
    [{ label: "Weitere Produkte", to: "/weitere-produkte" }, { label: "Pools" }],
  ),
  make(
    "pool-kaufen-angebote",
    "Pool kaufen – Angebote für Bayern",
    "Aktuelle Pool-Komplettpakete für Selbstabholer und Komplettmontage in München und Umgebung.",
    "Angebote",
    [
      "Profitieren Sie von attraktiven Komplettangeboten inklusive Becken, Technik und Abdeckung. Sprechen Sie uns an – wir machen Ihnen ein faires, individuelles Angebot.",
    ],
    [{ label: "Weitere Produkte", to: "/weitere-produkte" }, { label: "Pool-Angebote" }],
  ),
  make(
    "waermepumpen",
    "Wärmepumpen: Effiziente Wärme bis in den Spätsommer",
    "Moderne Inverter-Wärmepumpen mit Top-Effizienz – leise, sparsam und perfekt für das bayerische Klima.",
    "Wärmepumpe",
    [
      "Eine moderne Inverter-Wärmepumpe holt aus 1 kWh Strom bis zu 6 kWh Wärme – die wirtschaftlichste Form der Poolheizung.",
    ],
    [{ label: "Weitere Produkte", to: "/weitere-produkte" }, { label: "Wärmepumpen" }],
  ),
  make(
    "umwaelzpumpen",
    "Umwälzpumpen: Stilles Herzstück Ihres Pools",
    "Energiesparende Umwälzpumpen für klares Wasser bei minimalem Stromverbrauch.",
    "Pumpen",
    [
      "Wir setzen auf moderne, regelbare Umwälzpumpen, die je nach Bedarf nur so viel Energie verbrauchen, wie tatsächlich nötig ist – bis zu 80 % Stromersparnis gegenüber klassischen Modellen.",
    ],
    [{ label: "Weitere Produkte", to: "/weitere-produkte" }, { label: "Umwälzpumpen" }],
  ),
  make(
    "wasserbehandlung",
    "Wasserbehandlung mit ASEKO: Profi-Messtechnik für Ihr Zuhause",
    "Automatische Dosier- und Messsysteme von ASEKO – kristallklares Wasser auf Knopfdruck.",
    "ASEKO",
    [
      "Die ASEKO-Systeme messen kontinuierlich pH-Wert, Redox und Chlor und dosieren vollautomatisch nach. So bleibt Ihr Wasser dauerhaft hygienisch und angenehm – ohne tägliche Kontrolle.",
    ],
    [{ label: "Weitere Produkte", to: "/weitere-produkte" }, { label: "Wasserbehandlung" }],
    [
      { label: "Asin Aqua Oxygen", to: "/weitere-produkte/wasserbehandlung/asin-aqua-oxygen" },
      { label: "Asin Aqua Home", to: "/weitere-produkte/wasserbehandlung/asin-aqua-home" },
      { label: "Asin Aqua Salt", to: "/weitere-produkte/wasserbehandlung/asin-aqua-salt" },
    ],
  ),
  ...asekoLineup([
    ["asin-aqua-oxygen", "ASEKO Asin Aqua Oxygen", "Vollautomatik mit Aktivsauerstoff – sanft und chlorarm."],
    ["asin-aqua-home", "ASEKO Asin Aqua Home", "Die clevere Komplettlösung für moderne Privatpools."],
    ["asin-aqua-salt", "ASEKO Asin Aqua Salt", "Vollautomatik in Verbindung mit Salzelektrolyse."],
    ["asin-salt", "ASEKO Asin Salt", "Robuste Salzelektrolyse für klares, weiches Wasser."],
    ["asin-aqua-profi", "ASEKO Asin Aqua Profi", "Die Profi-Variante für gewerbliche Anwendungen."],
    ["pp-60-ph", "ASEKO PP 60 pH", "Präzise Dosierpumpe für die pH-Regulierung."],
    ["pp-10-floc-c", "ASEKO PP 10 Floc+C", "Dosierpumpe für Flockungsmittel und Chlor."],
  ]),
]);

function modelLineup(arr: [string, string, string][]) {
  return arr.map(([slug, name, claim]) => {
    const detail = getEnclosureDetail(slug);
    return make(
      slug,
      `${name}: ${claim}`,
      detail.subtitle,
      name,
      detail.description,
      [{ label: "Poolüberdachungen", to: "/poolueberdachungen" }, { label: name }],
      [
        { label: "Technische Details", to: "/poolueberdachungen/technische-details" },
        { label: "Poolabdeckungen", to: "/poolabdeckungen" },
        { label: "Kontakt aufnehmen", to: "/kontakt" },
      ],
      detail.faq,
    );
  });
}

function asekoLineup(arr: [string, string, string][]) {
  return arr.map(([slug, name, claim]) => {
    const detail = getAsekoDetail(slug);
    return make(
      slug,
      `${name}: ${claim}`,
      detail.subtitle,
      "ASEKO",
      detail.description,
      [
        { label: "Weitere Produkte", to: "/weitere-produkte" },
        { label: "Wasserbehandlung", to: "/weitere-produkte/wasserbehandlung" },
        { label: name },
      ],
      [
        { label: "Wasserbehandlung (ASEKO)", to: "/weitere-produkte/wasserbehandlung" },
        { label: "Pool chlorfrei", to: "/pool-chlorfrei" },
        { label: "Beratung anfragen", to: "/kontakt" },
      ],
      detail.faq,
    );
  });
}
