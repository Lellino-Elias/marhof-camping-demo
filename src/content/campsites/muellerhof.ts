import type { CampsiteConfig } from "../types";

const IMG = "/campsites/muellerhof";

export const muellerhof: CampsiteConfig = {
  name: "FKK-Camping Müllerhof",
  shortName: "Müllerhof",
  slug: "muellerhof",
  ort: "Keutschach am See",
  region: "Kärnten",
  brandKind: "FKK-Camping",
  see: "Keutschacher See",
  regionLong: "Region Wörthersee · Kärnten · Österreich",

  claim: "Das ruhige FKK-Camping-Erlebnis am Keutschacher See",
  claimEmphasis: "Keutschacher See",
  intro:
    "Viel Platz und Privatsphäre in sonniger Natur — direkt am Naturbadesee mit Trinkwasserqualität. Spontan buchen mit Platzgarantie, ganz ohne Reservierungsgebühr.",

  logo: { src: `${IMG}/Logo-Muellerhof4c-07.png`, alt: "FKK-Camping Müllerhof Logo" },

  statement: {
    text: "Hier wird Urlaub wieder zu dem, was er sein soll — ruhig, weit und ganz nah an der Natur.",
    emphasis: "ganz nah an der Natur",
  },

  pillars: [
    { title: "Freiheitsliebe", text: "Pure Entspannung am Naturbadesee mit Trinkwasserqualität.", image: { src: `${IMG}/163-6376_sonnenu.webp`, alt: "Abendstimmung am ruhigen Naturbadesee" } },
    { title: "Naturschönheit", text: "Pure Erholung in einer idyllischen Landschaft am Wörthersee.", image: { src: `${IMG}/luft1.webp`, alt: "Idyllische Landschaft am See aus der Luft" } },
    { title: "Wohlfühlcamping", text: "Gepflegte Anlage, TOP-Seerestaurant und WLAN auf dem ganzen Gelände.", image: { src: `${IMG}/rest08-terrasse-6315.webp`, alt: "Ruhige Terrasse des Seerestaurants am See" } },
  ],

  usps: [
    "Ohne Reservierungsgebühr",
    "Platzgarantie ohne Preisaufschlag",
    "Drei Badestrände am See",
    "TOP-Seerestaurant",
    "WLAN auf dem gesamten Gelände",
    "Trinkwasserqualität im See",
  ],

  trust: {
    heading: "Worauf du dich verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Keine versteckten Gebühren, geprüfte Qualität und mehrfach ausgezeichnet — vom ersten Klick bis zur Abreise am See.",
  },

  awards: [
    { label: "ADAC Camping 2024", image: { src: `${IMG}/adac24-camping.png`, alt: "ADAC Camping Auszeichnung 2024" } },
    { label: "PiNCAMP Top 100 Österreich 2024", image: { src: `${IMG}/PiNCAMP_Top_100_Icon_2024___sterreich.png`, alt: "PiNCAMP Top 100 Österreich 2024" } },
    { label: "Ausgezeichneter Campingplatz", image: { src: `${IMG}/award25.png`, alt: "Auszeichnung Campingplatz 2025" } },
  ],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/luft-titel2007-5247.webp`, alt: "Luftaufnahme des FKK-Camping Müllerhof am Keutschacher See" },
    sunset: { src: `${IMG}/163-6376_sonnenu.webp`, alt: "Sonnenuntergang am Keutschacher See" },
  },

  camping: {
    heading: "Camping am See",
    intro:
      "Ein Platz, der atmet: weite Stellplätze in der Sonne, drei eigene Badestrände und ein See in Trinkwasserqualität — Erholung, wie sie sein soll.",
    features: [
      { title: "Traumlage", text: "Eingebettet in die idyllische Landschaft am Keutschacher See, mitten in der Region Wörthersee.", image: { src: `${IMG}/luft2.webp`, alt: "Traumlage am Keutschacher See aus der Luft" } },
      { title: "Stellplätze", text: "Großzügige, sonnige Stellplätze mit viel Platz und Privatsphäre — direkt am Wasser oder im Grünen.", image: { src: `${IMG}/fkk_165915.webp`, alt: "Sonnige Stellplätze am Müllerhof" } },
      { title: "Drei Badestrände", text: "Gleich drei eigene Badestrände laden zum Schwimmen im glasklaren Naturbadesee ein.", image: { src: `${IMG}/fkk_165896.webp`, alt: "Badestrand am Keutschacher See" } },
      { title: "Sanitäreinrichtung", text: "Gepflegte, moderne Sanitäranlagen sorgen für Komfort während des gesamten Aufenthalts.", image: { src: `${IMG}/fkk_165910.webp`, alt: "Gepflegte, ruhige Anlage am Müllerhof" } },
      { title: "Seerestaurant", text: "Kulinarischer Genuss mit Seeblick: das TOP-Seerestaurant verwöhnt von früh bis spät.", image: { src: `${IMG}/rest08-terrasse6303.webp`, alt: "Gäste auf der Terrasse des Seerestaurants" } },
      { title: "Der kleine Laden", text: "Frische Brötchen und alles für den täglichen Bedarf — direkt am Platz.", image: { src: `${IMG}/shop-0854.webp`, alt: "Der kleine Laden am Campingplatz" } },
    ],
  },

  mobilheime: {
    heading: "Mobilheime & Mietunterkünfte",
    intro: "Komfortabel wohnen mitten in der Natur — schlüsselfertig, stilvoll, direkt am See.",
    items: [
      { name: "Nemo", kind: "Mobilheim", text: "Modernes Mobilheim mit überdachter Terrasse — ideal für Paare und kleine Familien.", image: { src: `${IMG}/fkk-wohnen6447-nemo.webp`, alt: "Mobilheim Nemo am Müllerhof" }, priceFrom: 135, features: ["bis 4 Personen", "Terrasse", "voll ausgestattet"] },
      { name: "Ginger", kind: "Mobilheim", text: "Großzügiges Mobilheim mit viel Licht und Platz für entspannte Familientage.", image: { src: `${IMG}/fkk-wohnen6447-ginger.webp`, alt: "Mobilheim Ginger am Müllerhof" }, priceFrom: 145, features: ["bis 5 Personen", "2 Schlafzimmer", "Terrasse"] },
      { name: "Mietwohnwagen", kind: "Mietwohnwagen", text: "Die unkomplizierte Art zu campen — fertig eingerichtet, einfach ankommen.", image: { src: `${IMG}/fkk-wohnen6527-mietwohnwagen.webp`, alt: "Mietwohnwagen mit Vorzelt am Müllerhof" }, priceFrom: 120, features: ["bis 4 Personen", "Vorzelt", "sofort bezugsfertig"] },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro: "Hier dürfen Kinder Kinder sein: Animation, Natur zum Anfassen und Platz zum Spielen.",
    features: [
      { title: "Kinderanimation", text: "Buntes Programm in den Ferien — von Spielen bis Basteln, für strahlende Kinderaugen.", image: { src: `${IMG}/clown-12-3881.webp`, alt: "Kinderanimation am Müllerhof" } },
      { title: "Naturerlebnis", text: "See, Wiese, Wald: Die Natur ist der schönste Abenteuerspielplatz.", image: { src: `${IMG}/kinder-rad.webp`, alt: "Kinder beim Radfahren in der Natur" } },
      { title: "Spielplatz & Spielraum", text: "Geschützte Spielbereiche zum Toben — drinnen wie draußen.", image: { src: `${IMG}/fkk_165890.webp`, alt: "Spielbereich am Campingplatz" } },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv in Kärnten",
    intro: "Berge, Seen und Kultur direkt vor der Tür — die Region Wörthersee ist ein Spielplatz für Entdecker.",
    items: [
      { title: "Bergerlebnisse", text: "Wandern in den Kärntner Nockbergen und auf den Hausbergen rund um den See.", image: { src: `${IMG}/Wandern.webp`, alt: "Wandern in den Bergen Kärntens" } },
      { title: "Radfahren & Biken", text: "Genussradln am See oder anspruchsvolle Touren — direkt ab Platz.", image: { src: `${IMG}/Rad.webp`, alt: "Radfahren rund um den Wörthersee" } },
      { title: "Golfen", text: "Mehrere Golfplätze in der Umgebung für entspannte Runden mit Aussicht.", image: { src: `${IMG}/golf1.webp`, alt: "Golfen in der Region Wörthersee" } },
      { title: "Burg Hochosterwitz", text: "Eine der schönsten Burgen Österreichs — ein Ausflug in die Geschichte.", image: { src: `${IMG}/hochosterwitz-0472.webp`, alt: "Burg Hochosterwitz" } },
      { title: "Großglockner", text: "Die legendäre Hochalpenstraße — Alpenpanorama zum Greifen nah.", image: { src: `${IMG}/grossglockner_3733.webp`, alt: "Großglockner Hochalpenstraße" } },
      { title: "Minimundus", text: "Die Welt im Kleinen am Wörthersee — ein Klassiker für Familien.", image: { src: `${IMG}/125-2598_minimundus.webp`, alt: "Minimundus am Wörthersee" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die A2 Südautobahn bis Klagenfurt, dann Richtung Keutschach am See — gut beschildert." },
      { title: "Mit dem Flugzeug", text: "Flughafen Klagenfurt (KLU) in rund 20 Minuten Fahrt, Ljubljana & Graz als Alternativen." },
      { title: "Mit Bahn & Bus", text: "Bahnhof Klagenfurt Hbf, weiter mit Bus oder Transfer in die Region Keutschach." },
    ],
  },

  // Teaser-Galerie — alle Bilder einzigartig (keine Dopplung mit den Sektionen oben).
  galerie: {
    heading: "Ein Platz wie gemalt",
    headingEmphasis: "gemalt",
    intro:
      "Morgenlicht über dem türkisen See, lange Sommerabende auf der Terrasse, ein eigener Platz im Grünen — ein paar Eindrücke vom Müllerhof.",
    tag: "Frühjahr bis Herbst",
    moreCount: 24,
    images: [
      { src: `${IMG}/fkk_165898.webp`, alt: "Sonniger Campingtag am Platz" },
      { src: `${IMG}/fkk_165903.webp`, alt: "Stellplatz im Grünen" },
      { src: `${IMG}/shop-0867.webp`, alt: "Der kleine Laden am Platz" },
      { src: `${IMG}/fkk-wohnen6404.webp`, alt: "Wohnkomfort in der Mietunterkunft" },
    ],
  },

  booking: {
    heading: "Buchen & Anfragen",
    intro: "Wähle Zeitraum, Unterkunft und Personen — wir melden uns mit deiner persönlichen Verfügbarkeit. Ohne Reservierungsgebühr.",
    pricesArePlaceholder: false,
    priceNote: "Richtpreis ab 2 Pers. · je nach Saison · ohne Reservierungsgebühr",
    highlight: {
      title: "Ohne Reservierungsgebühr",
      text: "Spontane Buchungen mit Platzgarantie — ohne Preisaufschlag.",
    },
    categories: [
      // Reale Preise lt. offizieller Müllerhof-Preisliste 2026 (Stellplatz = orange-Platz + 2 Erw., Vorsaison; Mietwohnwagen/Mobilheim = Basisnacht 2 Pers.)
      { id: "stellplatz", label: "Stellplatz", perNight: 43, perExtraGuest: 15 },
      { id: "mietwohnwagen", label: "Mietwohnwagen", perNight: 120, perExtraGuest: 0 },
      { id: "mobilheim", label: "Mobilheim", perNight: 135, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    tel: "+43 4273 2517",
    telHref: "tel:+4342732517",
    mail: "muellerhof@fkk-camping.at",
    facebook: "https://www.facebook.com/muellerhof/",
    adresse: "Dobein 10 · 9074 Keutschach am See · Kärnten",
    coords: { lat: 46.57979, lng: 14.14966 },
  },

  story: {
    kicker: "Dein Urlaub",
    heading: "Vom ersten Gedanken bis zum Lagerfeuer",
    intro:
      "Wie sich Urlaub bei uns anfühlt — vom ersten Träumen zu Hause bis zum letzten Funken am Feuer.",
    chapters: [
      { no: "01", kicker: "Die Vorfreude", title: "Es beginnt mit einer Idee", text: "Der Moment, in dem die Sehnsucht nach Freiheit größer wird als der Alltag — und der Urlaub gebucht ist." },
      { no: "02", kicker: "Die Anreise", title: "Einfach losfahren", text: "Hinter jeder Kurve ein Stück mehr Ruhe. Der Weg zu uns ist schon der halbe Urlaub." },
      { no: "03", kicker: "Das Ankommen", title: "Zuhause auf Zeit", text: "Markise raus, Stühle aufgestellt, Lichterkette an — in Minuten wird aus dem Stellplatz ein Lieblingsort." },
      { no: "04", kicker: "Das Genießen", title: "Abende, die bleiben", text: "Lagerfeuer, gute Gespräche, ein Himmel voller Sterne. Genau dafür kommt man wieder." },
    ],
  },

  languages: ["DE", "EN", "NL"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Traumlage", href: "#camping" },
        { label: "Stellplätze", href: "#camping" },
        { label: "Drei Badestrände", href: "#camping" },
        { label: "Sanitäreinrichtung", href: "#camping" },
        { label: "Seerestaurant", href: "#camping" },
        { label: "Der kleine Laden", href: "#camping" },
        { label: "3D-Tour", href: "#" },
      ],
    },
    {
      label: "Mobilheime",
      href: "#mobilheime",
      children: [
        { label: "Nemo", href: "#mobilheime" },
        { label: "Ginger", href: "#mobilheime" },
        { label: "Mietwohnwagen", href: "#mobilheime" },
      ],
    },
    {
      label: "Kinder",
      href: "#kinder",
      children: [
        { label: "Kinderanimation", href: "#kinder" },
        { label: "Naturerlebnis", href: "#kinder" },
        { label: "Spielplatz & Spielraum", href: "#kinder" },
      ],
    },
    {
      label: "Aktivitäten",
      href: "#aktivitaeten",
      children: [
        { label: "Bergerlebnisse", href: "#aktivitaeten" },
        { label: "Radfahren & Biken", href: "#aktivitaeten" },
        { label: "Golfen", href: "#aktivitaeten" },
        { label: "Wörthersee Plus Card", href: "#" },
        { label: "Ausflugsziele", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Lageplan", href: "#anreise" },
        { label: "Preise Stellplätze", href: "#booking" },
        { label: "Preise Mobilheime", href: "#booking" },
        { label: "Dauercamper", href: "#" },
        { label: "Angebote", href: "#booking" },
      ],
    },
    {
      label: "Anreise",
      href: "#anreise",
      children: [
        { label: "Mit dem Auto", href: "#anreise" },
        { label: "Mit dem Flugzeug", href: "#anreise" },
        { label: "Mit Bahn & Bus", href: "#anreise" },
      ],
    },
  ],
};

export default muellerhof;
