// NAVBAR ITEMS

import {
  appartment,
  bigAppartment,
  building,
  calendar,
  certificateDocument,
  closedBuilding,
  constructorHelmetProtection,
  contact,
  customerService,
  discount,
  EcoFriendly,
  extraFlask,
  extraTips,
  form,
  halfOpenBuilding,
  heart,
  history,
  home,
  houseWithTree,
  klant1Vrouw,
  klant2Man,
  klant3Man,
  klantenService,
  lamp,
  magnifyGlass,
  nonResidential,
  openBuilding,
  questionMark,
  rocket,
  smallAppartment,
  staalName,
  star,
  threeHouses,
  twoHouses,
  unique,
} from "../assets/index.js";

/*** NAVBAR ITEMS ***/
export const navbarItems = [
  {
    id: "home",
    title: "Home",
    href: "#home",
  },
  {
    id: "services",
    title: "Diensten",
    href: "#services",
  },
  {
    id: "pricing",
    title: "Tarieven",
    href: "#pricing",
  },
  {
    id: "about",
    title: "Over Ons",
    href: "#about",
  },
  {
    id: "faq",
    title: "FAQ",
    href: "#faq",
  },
];

/*** HOE WERKT HET ***/
export const howDoesItWork = [
  {
    id: "vooronderzoek",
    title: "Vooronderzoek",
    description:
      "We beginnen met een grondig vooronderzoek om de omvang en specificaties van uw project te begrijpen.",
  },
  {
    id: "advies-offerte",
    title: "Advies & Offerte",
    description:
      "Na het vooronderzoek verstrekken we een gedetailleerd advies en een transparante offerte.",
  },
  {
    id: "staalname",
    title: "Staalname",
    description:
      "Onze gecertificeerde experts nemen tot wel 4 stalen, die zijn inbegrepen in het tarief.",
  },
  {
    id: "analyse-rapportage",
    title: "Analyse & Rapportage",
    description:
      "De verzamelde stalen worden grondig geanalyseerd en de resultaten worden in een duidelijk rapport vastgelegd.",
  },
  {
    id: "asbestverwijdering",
    title: "Asbestverwijdering",
    description:
      "Indien nodig, coördineren we de veilige en efficiënte verwijdering van asbest.",
  },
  {
    id: "asbestattest",
    title: "Asbestattest",
    description:
      "Bij afronding van het project ontvangt u een officieel asbestattest als bewijs van een veilige omgeving.",
  },
];

/*** TARIEVEN ***/
export const tarieven = [
  {
    id: "appartementKlein",
    title: "Appartement (<150m²)",
    price: "495",
    extra: "4 stalen inbegrepen",
    logo: smallAppartment,
    opp: "t.e.m. 150m²",
    icon: "icon-home",
  },
  {
    id: "appartementGroot",
    title: "Appartement (>150m²)",
    price: "545",
    extra: "4 stalen inbegrepen",
    logo: bigAppartment,
    opp: "vanaf 150m²",
    icon: "icon-home",
  },
  {
    id: "openBebouwing",
    title: "Open bebouwing",
    price: "675",
    extra: "4 stalen inbegrepen",
    logo: openBuilding,
    opp: "t.e.m. 300m²",
    icon: "icon-expand",
  },
  {
    id: "geslotenBebouwing",
    title: "Gesloten bebouwing",
    price: "560",
    extra: "4 stalen inbegrepen",
    logo: closedBuilding,
    opp: "n.v.t.",
    icon: "icon-blocked",
  },
  {
    id: "halfOpenBebouwing",
    title: "Half-open bebouwing",
    price: "595",
    extra: "4 stalen inbegrepen",
    logo: halfOpenBuilding,
    opp: "n.v.t.",
    icon: "icon-half",
  },
  {
    id: "groteTerreinen",
    title: "Grote terreinen & niet residentieel",
    price: "Offerte",
    extra: "Contacteer voor meer info",
    logo: nonResidential,
    opp: "n.v.t.",
    icon: "icon-industrial",
  },
];

/*** DIENSTEN ***/
export const diensten = [
  {
    id: "gecertificeerde-experts",
    title: "Gecertificeerde Experts",
    description: "Alleen gecertificeerde specialisten.",
    logo: star,
  },
  {
    id: "op-maat-advies",
    title: "Op Maat Advies",
    description: "Persoonlijk en wettelijk advies.",
    logo: lamp,
  },
  {
    id: "snelle-service",
    title: "Snelle Service",
    description: "Snelle afhandeling, tot 4 stalen.",
    logo: rocket,
  },
  {
    id: "transparante-tarieven",
    title: "Transparante Tarieven",
    description: "Geen verborgen kosten.",
    logo: discount,
  },
  {
    id: "online-afspraken",
    title: "Online Afspraken",
    description: "Boek gemakkelijk online.",
    logo: calendar,
  },
  {
    id: "klantgerichte-benadering",
    title: "Klantgerichte Benadering",
    description: "U staat centraal.",
    logo: heart,
  },
];

/*** MISSION POINTS  ***/
export const missionPoints = [
  {
    id: "grondige-analyse",
    title: "Grondige Analyse",
    description: "Nauwkeurige Tests",
    logo: magnifyGlass,
  },
  {
    id: "veilige-verwijdering",
    title: "Veilige Verwijdering",
    description: "Geen Risico's",
    logo: constructorHelmetProtection,
  },
  {
    id: "certificering",
    title: "Certificering",
    description: "Officiële Attesten",
    logo: certificateDocument,
  },
];

/*** WAAROM ONS ***/
export const whyUs = [
  {
    id: "onze-geschiedenis",
    title: "Onze Geschiedenis",
    description:
      "Nieuw maar ervaren in de branche. Gedreven om Vlaanderen asbestveilig te maken tegen 2040.",
    logo: history,
  },
  {
    id: "waarom-ons",
    title: "Waarom Kiezen Voor Ons",
    description:
      "Snel en betrouwbaar in asbestcertificering, zonder verborgen kosten. Transparant en efficiënt.",
    logo: questionMark,
  },

  {
    id: "wat-maakt-ons-uniek",
    title: "Wat Maakt Ons Uniek",
    description:
      "Toegewijd aan kwaliteit en klanttevredenheid. We gebruiken de nieuwste technologieën voor een veilige certificering.",
    logo: unique,
  },
];

/*** TESTIMONIALS ***/
export const testimonials = [
  {
    id: "testimonial-1",
    title: "Annelies De Vries",
    role: "Bedrijfseigenaar",
    description:
      "Attestico heeft een ongelooflijk efficiënte service. Hun team maakte het hele proces van asbestcertificering eenvoudig en stressvrij.",
    logo: klant1Vrouw,
  },
  {
    id: "testimonial-2",
    title: "Bart Vermeulen",
    role: "Huiseigenaar",
    description:
      "Transparant, eerlijk en snel. Ik was erg onder de indruk van de professionaliteit van Attestico.",
    logo: klant2Man,
  },
  {
    id: "testimonial-3",
    title: "Bernd Willems",
    role: "Projectmanager",
    description:
      "Dankzij Attestico weet ik dat mijn werkomgeving veilig is. Hun experts zijn kundig en vriendelijk.",
    logo: klant3Man,
  },
];

export const disclaimer = [
  {
    id: "disclaimer-1",
    title: "Transparantie",
    description:
      "Onze prijzen zijn transparant en omvatten alle kosten," +
      " inclusief OVAM-bijdragen en retributies." +
      " Er zijn dus geen" +
      " verborgen kosten voor u!",
    extraInfo:
      "Voor een bezichtiging brengen we geen extra kosten in" +
      " rekening binnen Limburg. Buiten Limburg worden brandstofkosten" +
      " voor de heen- en terugreis toegevoegd.",
    extraInfo2: "Reistijd/uren worden NIET aangerekend.",
  },
  {
    id: "disclaimer-2",
    title: "Staalname",
    description:
      "De prijzen voor onze diensten zijn inclusief de afname van maximaal 4 stalen. Bij extra stalen wordt een vergoeding in rekening gebracht.",
    extraInfo:
      "Staalname is verplicht bij het onderzoek, maar dit is niet-destructief, dus er is geen demontage of" +
      " afbraak" +
      " nodig. We nemen veilig en zorgvuldig stalen op een plek waar ze onzichtbaar blijven.\n",
  },
  {
    id: "disclaimer-3",
    title: "Specifieke Tarieven",
    description:
      "De tarieven voor verschillende soorten eigendommen zijn duidelijk aangegeven op onze tarievenpagina.",
  },
];

export const extra = [
  {
    id: "staalname",
    title: "Staalname",
    details: "Veilig en Discreet",
    extraInfo: [
      "Nauwkeurig en subtiel",
      "Flexibele Afspraken",
      "Eco-vriendelijke methoden",
    ],
    logo: staalName,
    className: "info-card info-card-img",
    tag: ["betrouwbaarheid"],
    icon: EcoFriendly,
  },
  {
    id: "klantenservice",
    title: "Klantenservice",
    details: "Wij Zijn er Voor U",
    extraInfo: ["24/7 Beschikbaar", "Proactieve Updates", "Op Maat Advies"],
    logo: klantenService,
    className: "info-card info-card-img",
    tag: ["24/7 support ", "Proactief"],
    icon: customerService,
  },
  {
    id: "tips",
    title: "Tips",
    extraInfo: [
      "Wees Voorbereid",
      "Orden Documenten",
      "Ruimtes Toegankelijk",
      "Volg Protocol",
      "Draag PBM",
      "Houd Tijd Vrij",
      "Check Ventilatie",
      "Verwijder Obstakels",
      "Dubbelcheck Alles",
    ],
    icon: extraTips,

    className: "info-card tips",
  },
];

export const FASES = [
  {
    title: "Uw Eerste Stap: Neem Contact Op",
    num: "01",
    logo: contact,
    steps: [
      "Een telefoontje of e-mail, en u bent al begonnen.",
      "Bel ons op 0488 48 09 33",
      "Mail naar info@attestico.be.",
      "Wilt u liever online boeken? Dat kan ook!",
    ],
    style: {
      gridRow: "1",
    },
    hasEmailFunctionality: true,
  },
  {
    title: "Opdrachtformulier: Uw Sleutel tot Snelheid",
    num: "02",
    logo: form,
    steps: [
      "Download ons opdrachtformulier, vul het in en stuur het terug.",
      "Dit zet onze motoren aan het draaien!",
      "Mocht het niet lukken, geen zorgen. We vinden samen een oplossing.",
    ],
    style: {
      gridRow: "2",
    },
    hasPDFFunctionality: true,
  },
  {
    title: "Plaatsbezoek: Snel en Effectief",
    num: "03",
    logo: home,
    steps: [
      "Na ontvangst van uw opdrachtformulier starten we met het plaatsbezoek.",
      "We kijken ernaar uit u te ontmoeten!",
    ],
    style: {
      gridRow: "3",
    },
  },
];

export const WAT_U_MOET_WETEN = [
  {
    title: "Kostentransparantie",
    details: "Geen Verborgen Kosten",
    extraInfo: [
      "Alles-inclusief: BTW, OVAM- en certificatiekosten zijn inbegrepen.",
      "Verplaatsingen binnen Limburg zijn gratis. Voor andere regio's gelden kleine toeslagen.",
    ],
  },
  {},
];

export const EXTRA_DIENSTEN_EN_INFORMATIE = [
  {
    title: "Extra Stalen",
    details: "Kosten en Opties",
    extraInfo: [
      "Extra stalen kosten €39 per stuk.",
      "Korting beschikbaar: €35 bij meerdere stalen.",
    ],
    logo: extraFlask,
  },
  {
    logo: customerService,
  },
  {
    title: "Extra Tips",
    details: "Voorbereiding is Belangrijk",
    extraInfo: [
      "Vooronderzoek: zorg voor beschikbare gegevens, documenten en plannen.",
      "Zorg dat alle ruimtes toegankelijk zijn tijdens het onderzoek.",
    ],
    logo: extraTips,
  },
];

export const CONTACT_DETAILS = [
  {
    id: "email",
    title: "attestico@attestico.com",
  },
  {
    id: "phone",
    title: "048360083",
  },
];
