import type { ProductContent } from "@/components/ProductPage";

const baseBenefits = [
  { title: "Energieeinsparung", text: "Bis zu 70 % weniger Wärmeverlust – spürbar niedrigere Heiz- und Stromkosten." },
  { title: "Sicherheit", text: "Zuverlässiger Schutz für Kinder und Haustiere – Sicherheit, die man sieht." },
  { title: "Komfort", text: "Bedienung per Knopfdruck oder App – Pool öffnen war noch nie so einfach." },
  { title: "Werterhalt", text: "Schützt Wasser und Technik vor Schmutz, UV und Witterung – langfristig." },
];

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
    benefits: baseBenefits,
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
  return arr.map(([slug, name, claim]) =>
    make(
      slug,
      `${name}: ${claim}`,
      `Erleben Sie die ${name}-Überdachung – Premiumqualität, exakt für Ihren Pool konfiguriert.`,
      name,
      [
        `Die ${name} kombiniert hochwertige Materialien mit durchdachtem Design. Sie schützt Ihren Pool, verlängert die Saison und wertet Ihren Garten optisch auf.`,
        "Erhältlich in vielen Farben und Sondermaßen, optional mit Motorisierung, Seitentüren und Sicherheitsverriegelung.",
      ],
      [{ label: "Poolüberdachungen", to: "/poolueberdachungen" }, { label: name }],
    ),
  );
}

function asekoLineup(arr: [string, string, string][]) {
  return arr.map(([slug, name, claim]) =>
    make(
      slug,
      `${name}: ${claim}`,
      "Made in Czech – Profi-Wasseraufbereitung in privater Größe.",
      "ASEKO",
      [
        `Die ${name} ist Teil der bewährten ASEKO-Produktfamilie. Robuste Sensorik, präzise Dosierung und einfache Bedienung machen sie zur idealen Wahl für Ihren Pool.`,
        "Wir liefern, montieren und nehmen das System bei Ihnen vor Ort fachgerecht in Betrieb.",
      ],
      [
        { label: "Weitere Produkte", to: "/weitere-produkte" },
        { label: "Wasserbehandlung", to: "/weitere-produkte/wasserbehandlung" },
        { label: name },
      ],
    ),
  );
}
