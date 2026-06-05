import type { CampsiteConfig } from "../types";

/**
 * Camping & Pension Marhof — Drobollach am Faaker See, Kärnten.
 * Alle Texte/Fakten belegt aus marhof.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Marhof-Fotos in /public/campsites/marhof/.
 * EHRLICH: der Platz liegt ERHABEN ÜBER dem Faaker See (ca. 8 Gehminuten zum
 * Ufer) — nie als "direkt am See" geframt. Kein Pool-Foto vorhanden → Pool nur
 * im Text. Keine eindeutige Auszeichnung → awards bleibt leer.
 */
const IMG = "/campsites/marhof";

export const marhof: CampsiteConfig = {
  name: "Camping & Pension Marhof",
  shortName: "Marhof",
  slug: "marhof",
  ort: "Drobollach am Faaker See",
  region: "Kärnten",
  brandKind: "Pension & Camping",
  see: "Faaker See",
  regionLong: "Urlaubsregion Faaker See · Kärnten · Österreich",

  claim: "Dein sonniger Familienurlaub über dem Faaker See",
  claimEmphasis: "über dem Faaker See",
  intro:
    "Wiesencamping, Pension & Ferienwohnungen auf einem ruhigen Sonnenhügel — nur rund 8 Gehminuten zum warmen Faaker See, mitten in Kärnten.",

  logo: { src: `${IMG}/logo_marhof_660.jpg`, alt: "Camping & Pension Marhof Logo" },

  statement: {
    text: "Bei uns ist Urlaub noch Familiensache — ungezwungen, sonnig und mitten in der Kärntner Natur.",
    emphasis: "noch Familiensache",
  },

  pillars: [
    { title: "Sonnige Höhenlage", text: "Ruhig über dem Faaker See gelegen, mit weitem Blick auf Wiesen, Wald und die Karawanken.", image: { src: `${IMG}/luft_marhof21_0020.jpg`, alt: "Luftaufnahme des Marhof auf dem Sonnenhügel über dem Faaker See" } },
    { title: "Der warme Faaker See", text: "Einer der wärmsten Badeseen Kärntens — nur rund 8 Gehminuten von deinem Platz entfernt.", image: { src: `${IMG}/insel.jpg`, alt: "Badespaß am warmen Faaker See" } },
    { title: "Tiere & Hofleben", text: "Streichelzoo, Traktorfahrten und viel Platz zum Spielen — hier leuchten Kinderaugen.", image: { src: `${IMG}/traktorfahrt-0220.jpg`, alt: "Traktorfahrt mit dem Oldtimer-Traktor am Marhof" } },
  ],

  usps: [
    "Familiär geführt",
    "Nur ~8 Min. zum Faaker See",
    "Streichelzoo & Spielplatz",
    "Pool mit Wasserrutsche",
    "Hunde am Camping willkommen",
    "Preise inkl. Kurtaxe",
  ],

  trust: {
    heading: "Worauf du dich am Marhof verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Melcher, faire Preise inklusive Kurtaxe und eine ruhige Sonnenlage mit allem, was Familien für entspannte Tage brauchen.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/luft_marhof21_0069.jpg`, alt: "Luftaufnahme: Wiesencamping Marhof über dem Faaker See mit Blick auf die Karawanken" },
  },

  camping: {
    heading: "Wiesencamping Marhof",
    intro:
      "Schöne, ebene Stellplätze auf großzügigem Wiesengelände, umgeben von Wiesen, Wald und Bergen — Natur pur über dem Faaker See.",
    features: [
      { title: "Sonnige Top-Lage", text: "Erhaben über dem Faaker See, umgeben von Wiesen, Wäldern und Äckern — ruhig und sonnig zugleich.", image: { src: `${IMG}/luft_marhof21_0014.jpg`, alt: "Luftaufnahme der sonnigen Lage des Marhof" } },
      { title: "Ebene Stellplätze", text: "Großzügige, gepflegte Wiesen-Stellplätze von 80 bis 120 m² — für Wohnmobil, Wohnwagen, Faltwagen und Zelt bis 8 m.", image: { src: `${IMG}/marhof165733.jpg`, alt: "Ebene Stellplätze mit Wohnwagen und Vorzelten am Marhof" } },
      { title: "Gepflegte Sanitäranlagen", text: "Warmwasserduschen, WC, Waschmaschine und Waschplatz — Komfort für einen unbeschwerten Campingurlaub.", image: { src: `${IMG}/camping-sanitaer-1075.jpg`, alt: "Gepflegte Sanitäranlage am Campingplatz Marhof" } },
      { title: "Zelt & Wohnmobil", text: "Eigener Wiesenplatz mit viel Raum — ideal für Zeltcamper wie für Wohnmobile und Wohnwagen.", image: { src: `${IMG}/zeltplatz-0161.jpg`, alt: "Zeltplatz auf der Wiese am Marhof" } },
      { title: "Mitten in der Natur", text: "Begrenzt von Wäldern und Wiesen, eingebettet in die idyllische Landschaft der Region Faaker See.", image: { src: `${IMG}/marhof165755.jpg`, alt: "Überblick über den Campingplatz Marhof vor den Bergen" } },
      { title: "Hunde willkommen", text: "Der Vierbeiner darf mit: Hunde sind am Campingplatz herzlich willkommen.", image: { src: `${IMG}/campingplatz-0168.jpg`, alt: "Wiesencampingplatz Marhof mit Wohnwagen und Zelten" } },
    ],
  },

  mobilheime: {
    heading: "Zimmer & Ferienwohnungen",
    intro:
      "Lieber feste Wände als Zelt? Gemütliche Pensionszimmer mit reichhaltigem Frühstück und moderne Ferienwohnungen — mit dem Komfort, einfach anzukommen.",
    items: [
      { name: "Doppelzimmer", kind: "Pension · mit Frühstück", text: "Gemütliches Doppelzimmer mit reichhaltigem Frühstücksbuffet — der entspannte Start in den Urlaubstag.", image: { src: `${IMG}/zimmer-ausblick-0244.jpg`, alt: "Pensionszimmer mit Ausblick am Marhof" }, priceFrom: 85, features: ["2 Personen", "Frühstücksbuffet", "ruhige Lage"] },
      { name: "Ferienwohnung Komfort", kind: "Ferienwohnung", text: "Helle Ferienwohnung mit eigener Küche und Balkon — ideal für Paare und kleine Familien.", image: { src: `${IMG}/marhof21_2161.jpg`, alt: "Wohnbereich der Ferienwohnung am Marhof mit Bergblick" }, priceFrom: 80, features: ["2–3 Personen", "ca. 42 m²", "eigene Küche"] },
      { name: "Ferienwohnung Familie", kind: "Ferienwohnung", text: "Großzügige Ferienwohnung mit viel Platz für die ganze Familie — komfortabel ausgestattet.", image: { src: `${IMG}/marhof21_2208.jpg`, alt: "Geräumige Familien-Ferienwohnung am Marhof" }, priceFrom: 100, features: ["3–5 Personen", "ca. 54 m²", "Bettwäsche inkl."] },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Langeweile ist hier ein Fremdwort: Tiere zum Streicheln, Spielplatz, Traktorfahrten und Pool mit Rutsche — hier dürfen Kinder Kinder sein.",
    features: [
      { title: "Streichelzoo", text: "Alpakas, Hasen und mehr: der hofeigene Streichelzoo ist täglich zum Staunen und Streicheln offen.", image: { src: `${IMG}/marhof165721.jpg`, alt: "Spielplatz mit Turmrutsche am Marhof" } },
      { title: "Spielplatz & Trampolin", text: "Turmrutsche, Schaukel, Sandkasten und überdachte Trampolinarena — Gokarts stehen gratis bereit.", image: { src: `${IMG}/marhof165721.jpg`, alt: "Spielplatz am Marhof" } },
      { title: "Pool mit Wasserrutsche", text: "Abkühlung gefällig? Der Pool mit Wasserrutsche sorgt für Quietschvergnügen an heißen Tagen.", image: { src: `${IMG}/marhof165721.jpg`, alt: "Familienangebot am Marhof" } },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Faaker See",
    intro:
      "Berge, Seen und jede Menge Hofleben direkt vor der Tür — rund um den Marhof wird es nie langweilig.",
    items: [
      { title: "Streichelzoo & Tiere", text: "Alpakas, Hasen und Co. — der hofeigene Streichelzoo ist ein Highlight für die Kleinen.", image: { src: `${IMG}/alpaka.jpg`, alt: "Alpaka im Streichelzoo am Marhof" } },
      { title: "Traktorfahrten", text: "Die beliebte Runde mit dem Oldtimer-Traktor — Hofabenteuer für die ganze Familie.", image: { src: `${IMG}/traktorfahrt-0213.jpg`, alt: "Traktorfahrt am Marhof" } },
      { title: "Wandern & Bergsteigen", text: "Vom Hügel direkt in die Berge: Touren in den Nockbergen und rund um den Faaker See.", image: { src: `${IMG}/wandern-nockb6457.jpg`, alt: "Wandern in den Bergen rund um den Faaker See" } },
      { title: "Surfen & Baden", text: "Der warme Faaker See ist ideal zum Surfen, Segeln, Tauchen und Schwimmen — in 8 Minuten am Wasser.", image: { src: `${IMG}/surfen-1137.jpg`, alt: "Surfen am Faaker See" } },
      { title: "Klettern", text: "Klettern und Klettersteige in der felsigen Bergwelt Kärntens — für aktive Urlaubstage.", image: { src: `${IMG}/klettern.jpg`, alt: "Klettern in den Bergen Kärntens" } },
      { title: "Golfen & Reiten", text: "Golfplätze und Reitmöglichkeiten in der Umgebung — Abwechslung für jeden Geschmack.", image: { src: `${IMG}/reiten-1996.jpg`, alt: "Reiten in der Region Faaker See" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die A2 / A11 bis Villach, weiter Richtung Faaker See nach Drobollach — Greutherweg 19, gut beschildert." },
      { title: "Mit dem Flugzeug", text: "Flughafen Klagenfurt (KLU) in rund 25 Minuten Fahrt, Ljubljana als Alternative." },
      { title: "Mit Bahn & Bus", text: "Bahnhof Villach Hbf, weiter mit Bus oder Transfer nach Drobollach am Faaker See." },
    ],
  },

  galerie: {
    heading: "Ein Hof zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Sonnige Wiesen, Tiere, Bergblick und der See vor der Tür — ein paar Eindrücke vom Marhof in Drobollach.",
    tag: "Mai bis September",
    images: [
      { src: `${IMG}/luft_marhof21_0032.jpg`, alt: "Luftaufnahme des Marhof über dem Faaker See" },
      { src: `${IMG}/faakersee-1180.jpg`, alt: "Der Faaker See in Kärnten" },
      { src: `${IMG}/pension-0235.jpg`, alt: "Pension Marhof mit blumengeschmückten Balkonen" },
      { src: `${IMG}/marhof165732.jpg`, alt: "Überdachte Trampolinarena am Marhof" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen — Familie Melcher meldet sich mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise Vorsaison · inkl. Kurtaxe · je nach Saison & Belegung",
    highlight: {
      title: "Inklusive Kurtaxe",
      text: "Die Preise sind inklusive Ortstaxe. Außerhalb der Hauptsaison ist meist keine Reservierung nötig.",
    },
    categories: [
      // Reale Camping-Preisliste Marhof 2026 (Stellplatz 2 Pers., Vorsaison; FeWo/Zimmer = Startpreis "ab").
      { id: "stellplatz", label: "Stellplatz", perNight: 26, perExtraGuest: 9 },
      { id: "ferienwohnung", label: "Ferienwohnung", perNight: 80, perExtraGuest: 0 },
      { id: "zimmer", label: "Zimmer + Frühstück", perNight: 85, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    tel: "+43 4254 2888",
    telHref: "tel:+4342542888",
    mail: "office@marhof.at",
    adresse: "Greutherweg 19 · 9580 Drobollach am Faaker See · Kärnten",
    coords: { lat: 46.59022, lng: 13.91386 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Pension",
      href: "#mobilheime",
      children: [
        { label: "Doppelzimmer", href: "#mobilheime" },
        { label: "Ferienwohnungen", href: "#mobilheime" },
        { label: "Frühstück", href: "#mobilheime" },
      ],
    },
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Sonnige Top-Lage", href: "#camping" },
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Streichelzoo", href: "#kinder" },
        { label: "Spielplatz & Trampolin", href: "#kinder" },
        { label: "Pool mit Rutsche", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Wandern & Bergsteigen", href: "#aktivitaeten" },
        { label: "Surfen & Baden", href: "#aktivitaeten" },
        { label: "Ausflugsziele", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default marhof;
