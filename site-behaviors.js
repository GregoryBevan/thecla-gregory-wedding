const ALT_THEME_CLASS = "theme-text-alt";
const FRAME_STYLE_CLASSES = ["frame-style-ornate", "frame-style-minimal"];
const FALLBACK_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["fr", "en"];

const translations = {
  en: {
    metaDescription: "The wedding website of Thecla and Grégory, for our invited guests.",
    skipLink: "Skip to content",
    navAriaLabel: "Primary",
    brandAriaLabel: "Thecla and Grégory wedding website",
    navToggle: "Toggle navigation menu",
    heroSummaryAriaLabel: "Wedding summary",
    navStory: "Story",
    navCelebration: "Celebration",
    navDetails: "Details",
    navRsvp: "RSVP",
    heroTitle: "We're getting married",
    heroText: "We're so happy to celebrate with you. Find our story, the schedule, the venue details, and how to RSVP here.",
    saveTheDate: "Save the date<br>27 March 2027",
    heroCardCopy: "A day of love, laughter, and sharing it with the people who matter most to us.",
    storyTitle: "Our story",
    storyPhoto1Alt: "Thecla and Grégory smiling together in front of the Eiffel Tower",
    storyPhoto2Alt: "Thecla and Grégory posing at the Uganda Equator monument",
    storyPhoto3Alt: "Thecla and Grégory embracing in front of a Christmas tree",
    storyPhoto4Alt: "Thecla and Grégory cuddled up in the snow at night",
    storyPhoto5Alt: "Thecla and Grégory sharing a kiss on a garden footbridge",
    storyPhoto6Alt: "Thecla and Grégory smiling together at a café",
    storyParagraph1: "It began with a simple hello, and somehow it felt like the beginning of something that had been waiting for us all along. From the very first conversation, we discovered a friendship that grew gently and surely, shaped by laughter, patience, and the comfort of being completely ourselves with each other.",
    storyParagraph2: "Over time, the ordinary moments became our favorite memories: long walks, quiet evenings, shared dreams, and the deep certainty that we had found not only love, but a home in one another. Every step brought us closer to this beautiful chapter, and every day since has reminded us how lucky we are to be writing it together.",
    storyParagraph3: "We are so grateful for the life we are building side by side, and for the people who have supported and celebrated us along the way. We cannot wait to begin this next chapter with you by our side.",
    celebrationTitle: "Celebration flow",
    ceremonyTitle: "Ceremony",
    ceremonyText: "A civil ceremony surrounded by the people we love most.",
    vinDHonneurTitle: "Cocktail hour",
    vinDHonneurText: "A first drink together, a few bites, and a moment to share before the evening begins.",
    receptionTitle: "Reception",
    receptionText: "A shared dinner, dancing, and good conversations to end the day in style.",
    detailsTitle: "Wedding details",
    scheduleTitle: "The day",
    scheduleText: "<span class='schedule-item'><strong>2:00 pm</strong><span>Ceremony</span></span><span class='schedule-item'><strong>4:30 pm</strong><span>Cocktail hour</span></span><span class='schedule-item'><strong>7:00 pm</strong><span>Reception</span></span>",
    venueTitle: "Venue guide",
    venueText: "<strong>Ceremony:</strong><br><a href='https://www.google.com/maps/place/Rue+de+la+Commune,+44000+Nantes/@47.2182184,-1.5564297,17z/data=!4m15!1m8!3m7!1s0x4805eea40b794575:0x31cfafa59bbea4b5!2sRue+de+la+Commune,+44000+Nantes!3b1!8m2!3d47.2182148!4d-1.5538548!16s%2Fg%2F12dpwr8fh!3m5!1s0x4805eea40b794575:0x31cfafa59bbea4b5!8m2!3d47.2182148!4d-1.5538548!16s%2Fg%2F12dpwr8fh' target='_blank' rel='noopener'>Mairie Centrale de Nantes, Rue de la Commune, 44000 Nantes<span class='sr-only'> (opens in Google Maps, in a new tab)</span></a><br><a href='https://metropole.nantes.fr/lieu/mairie-centrale-de-nantes#Access' target='_blank' rel='noopener'>Access information<span class='sr-only'> (opens in a new tab)</span></a><br><br><strong>Cocktail hour and reception:</strong><br><a href='https://www.google.com/maps/search/?api=1&query=Salle+du+Bois+Olive%2C+Les+Brosses%2C+44830+Bouaye' target='_blank' rel='noopener'>Salle du Bois Olive, Les Brosses, 44830 Bouaye<span class='sr-only'> (opens in Google Maps, in a new tab)</span></a><br><a href='https://lasalleduboisolive-bouaye.webador.fr/contact' target='_blank' rel='noopener'>Contact and access<span class='sr-only'> (opens in a new tab)</span></a>",
    dressCodeTitle: "Dress code",
    dressCodeText: "<span class='palette' role='img' aria-label='Colour palette: grey-blue, steel blue, dusty rose, navy, pale pink'><span class='palette-swatch'></span><span class='palette-swatch'></span><span class='palette-swatch'></span><span class='palette-swatch'></span><span class='palette-swatch'></span></span>Soft blues, dusty greys and a hint of blush: choose a shade (or two) that suits you. We simply ask that white be left to the bride.",
    rsvpTitle: "R.S.V.P.",
    rsvpText: "Your physical invitation includes a QR code that connects you to our digital guest experience through dywy. Simply scan the code to request your personalized magic link, then log in to complete your RSVP.<br><br>Through dywy, you'll be able to confirm your attendance, share your dietary preferences, and even add a song to our wedding dinner playlist. We're looking forward to celebrating with you!",
    footerText: "Made with love for a joyful celebration."
  },
  fr: {
    metaDescription: "Le site de mariage de Thecla et Grégory, réservé à nos invités.",
    skipLink: "Aller au contenu",
    navAriaLabel: "Principale",
    brandAriaLabel: "Site de mariage de Thecla et Grégory",
    navToggle: "Ouvrir le menu de navigation",
    heroSummaryAriaLabel: "Résumé du mariage",
    navStory: "Histoire",
    navCelebration: "Célébration",
    navDetails: "Détails",
    navRsvp: "RSVP",
    heroTitle: "Nous allons nous marier",
    heroText: "Nous sommes très heureux de célébrer avec vous. Retrouvez ici notre histoire, le programme, les informations sur le lieu et comment confirmer votre présence.",
    saveTheDate: "Réservez la date<br>27 mars 2027",
    heroCardCopy: "Une journée d’amour et de rires, à partager avec celles et ceux qui comptent le plus pour nous.",
    storyTitle: "Notre histoire",
    storyPhoto1Alt: "Thecla et Grégory souriants ensemble devant la tour Eiffel",
    storyPhoto2Alt: "Thecla et Grégory posant devant le monument de l’équateur en Ouganda",
    storyPhoto3Alt: "Thecla et Grégory enlacés devant un sapin de Noël",
    storyPhoto4Alt: "Thecla et Grégory blottis l’un contre l’autre dans la neige, le soir",
    storyPhoto5Alt: "Thecla et Grégory s’embrassant sur une passerelle de jardin",
    storyPhoto6Alt: "Thecla et Grégory souriants ensemble dans un café",
    storyParagraph1: "Tout a commencé par un simple bonjour, et pourtant il nous a semblé que c’était le début de quelque chose qui nous attendait depuis toujours. Dès la première conversation, nous avons découvert une amitié qui s’est développée doucement et sûrement, portée par le rire, la patience et le confort de se montrer tels que nous sommes.",
    storyParagraph2: "Au fil du temps, les moments les plus simples sont devenus nos plus beaux souvenirs : longues promenades, soirées tranquilles, projets partagés et cette certitude profonde que nous avions trouvé non seulement l’amour, mais aussi un foyer l’un dans l’autre. Chaque étape nous a rapprochés de ce magnifique chapitre, et chaque jour depuis nous rappelle à quel point nous avons de la chance d’écrire cette histoire ensemble.",
    storyParagraph3: "Nous sommes si reconnaissants de la vie que nous construisons côte à côte, et de toutes les personnes qui ont partagé notre chemin et célébré notre amour. Nous avons hâte de commencer ce prochain chapitre avec vous à nos côtés.",
    celebrationTitle: "Déroulement de la célébration",
    ceremonyTitle: "Cérémonie",
    ceremonyText: "Une cérémonie civile entourée des personnes que nous aimons le plus.",
    vinDHonneurTitle: "Vin d’honneur",
    vinDHonneurText: "Un premier verre ensemble, quelques amuse-bouches et un moment pour partager avant le début de la soirée.",
    receptionTitle: "Réception",
    receptionText: "Un dîner à partager, de la danse et de belles conversations pour finir la journée en beauté.",
    detailsTitle: "Détails du mariage",
    scheduleTitle: "La journée",
    scheduleText: "<span class='schedule-item'><strong>14h00</strong><span>Cérémonie</span></span><span class='schedule-item'><strong>16h30</strong><span>Vin d’honneur</span></span><span class='schedule-item'><strong>19h00</strong><span>Réception</span></span>",
    venueTitle: "Guide du lieu",
    venueText: "<strong>Cérémonie :</strong><br><a href='https://www.google.com/maps/place/Rue+de+la+Commune,+44000+Nantes/@47.2182184,-1.5564297,17z/data=!4m15!1m8!3m7!1s0x4805eea40b794575:0x31cfafa59bbea4b5!2sRue+de+la+Commune,+44000+Nantes!3b1!8m2!3d47.2182148!4d-1.5538548!16s%2Fg%2F12dpwr8fh!3m5!1s0x4805eea40b794575:0x31cfafa59bbea4b5!8m2!3d47.2182148!4d-1.5538548!16s%2Fg%2F12dpwr8fh' target='_blank' rel='noopener'>Mairie Centrale de Nantes, Rue de la Commune, 44000 Nantes<span class='sr-only'> (s’ouvre dans Google Maps, dans un nouvel onglet)</span></a><br><a href='https://metropole.nantes.fr/lieu/mairie-centrale-de-nantes#Access' target='_blank' rel='noopener'>Informations d’accès<span class='sr-only'> (s’ouvre dans un nouvel onglet)</span></a><br><br><strong>Vin d’honneur et réception :</strong><br><a href='https://www.google.com/maps/search/?api=1&query=Salle+du+Bois+Olive%2C+Les+Brosses%2C+44830+Bouaye' target='_blank' rel='noopener'>Salle du Bois Olive, Les Brosses, 44830 Bouaye<span class='sr-only'> (s’ouvre dans Google Maps, dans un nouvel onglet)</span></a><br><a href='https://lasalleduboisolive-bouaye.webador.fr/contact' target='_blank' rel='noopener'>Contact et accès<span class='sr-only'> (s’ouvre dans un nouvel onglet)</span></a>",
    dressCodeTitle: "Code vestimentaire",
    dressCodeText: "<span class='palette' role='img' aria-label='Palette de couleurs : gris bleuté, bleu acier, rose poudré, bleu nuit, rose pâle'><span class='palette-swatch'></span><span class='palette-swatch'></span><span class='palette-swatch'></span><span class='palette-swatch'></span><span class='palette-swatch'></span></span>Des bleus doux, des gris poudrés et une pointe de rose pâle : choisissez une teinte (ou deux) qui vous ressemble. Nous vous demandons simplement de laisser le blanc à la mariée.",
    rsvpTitle: "R.S.V.P.",
    rsvpText: "Votre faire-part physique comprend un QR code qui vous connecte à notre expérience digitale pour invités via dywy. Il vous suffit de scanner le code pour demander votre lien magique personnalisé, puis de vous connecter pour compléter votre RSVP.<br><br>Grâce à dywy, vous pourrez confirmer votre présence, partager vos préférences alimentaires et même ajouter une chanson à notre playlist du dîner de mariage. Nous avons hâte de célébrer avec vous !",
    footerText: "Fait avec amour pour une célébration joyeuse."
  }
};

document.documentElement.classList.add("has-js");

const pageBody = document.body;
const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const rsvpSection = document.querySelector("#rsvp");
const desktopMediaQuery = window.matchMedia("(min-width: 72rem)");

function detectPreferredLanguage() {
  const preferredLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || FALLBACK_LANGUAGE];

  for (const language of preferredLanguages) {
    const normalizedLanguage = (language || FALLBACK_LANGUAGE).toLowerCase().split("-")[0];

    if (SUPPORTED_LANGUAGES.includes(normalizedLanguage)) {
      return normalizedLanguage;
    }
  }

  return FALLBACK_LANGUAGE;
}

function setTextContent(element, key, language) {
  if (!element) {
    return;
  }

  const translation = translations[language]?.[key];
  if (!translation) {
    return;
  }

  if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
    element.value = translation;
    return;
  }

  element.innerHTML = translation;
}

function applyTranslations(language) {
  const elements = document.querySelectorAll("[data-i18n-key]");

  for (const element of elements) {
    setTextContent(element, element.dataset.i18nKey, language);
  }

  const ariaElements = document.querySelectorAll("[data-i18n-aria]");
  for (const element of ariaElements) {
    const key = element.dataset.i18nAria;
    const translation = translations[language]?.[key];
    if (translation) {
      element.setAttribute("aria-label", translation);
    }
  }

  const altElements = document.querySelectorAll("[data-i18n-alt]");
  for (const element of altElements) {
    const key = element.dataset.i18nAlt;
    const translation = translations[language]?.[key];
    if (translation) {
      element.setAttribute("alt", translation);
    }
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    const translation = translations[language]?.metaDescription;
    if (translation) {
      metaDescription.setAttribute("content", translation);
    }
  }

  document.documentElement.lang = language;
}

function setNavOpenState(isOpen) {
  if (!siteHeader || !navToggle) {
    return;
  }

  siteHeader.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

function initializeMobileMenu() {
  if (!siteHeader || !navToggle) {
    return;
  }

  setNavOpenState(false);

  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.contains("nav-open");
    setNavOpenState(!isOpen);
  });

  document.addEventListener("click", (event) => {
    const isOpen = siteHeader.classList.contains("nav-open");
    if (!isOpen) {
      return;
    }

    if (event.target instanceof Node && !siteHeader.contains(event.target)) {
      setNavOpenState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    const isOpen = siteHeader.classList.contains("nav-open");
    if (event.key === "Escape" && isOpen) {
      setNavOpenState(false);
      navToggle.focus();
    }
  });

  for (const link of navLinks) {
    link.addEventListener("click", () => {
      setNavOpenState(false);
    });
  }

  desktopMediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      setNavOpenState(false);
    }
  });
}

function syncFooterFillHeight() {
  if (!rsvpSection || !siteHeader) {
    return;
  }

  if (!desktopMediaQuery.matches) {
    pageBody.style.removeProperty("--footer-fill-height");
    return;
  }

  const viewportHeight = window.innerHeight;
  const headerHeight = siteHeader.getBoundingClientRect().height;
  const rsvpHeight = rsvpSection.getBoundingClientRect().height;
  const remainingHeight = Math.max(0, viewportHeight - headerHeight - rsvpHeight);

  pageBody.style.setProperty("--footer-fill-height", `${remainingHeight}px`);
}

function applyTheme(isAltTheme) {
  pageBody.classList.toggle(ALT_THEME_CLASS, isAltTheme);
}

function applyFrameStyleFromQuery() {
  const queryParams = new URLSearchParams(window.location.search);
  const frameStyle = queryParams.get("frameStyle");

  if (frameStyle !== "minimal" && frameStyle !== "ornate") {
    return;
  }

  for (const className of FRAME_STYLE_CLASSES) {
    pageBody.classList.remove(className);
  }

  pageBody.classList.add(`frame-style-${frameStyle}`);
}

function isAltThemeFromQuery() {
  const queryParams = new URLSearchParams(window.location.search);
  const queryTheme = queryParams.get("textColor");

  return queryTheme === "alt";
}

applyFrameStyleFromQuery();
applyTheme(isAltThemeFromQuery());
applyTranslations(detectPreferredLanguage());
initializeMobileMenu();
syncFooterFillHeight();

window.addEventListener("resize", syncFooterFillHeight);
desktopMediaQuery.addEventListener("change", syncFooterFillHeight);

