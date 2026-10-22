const ALT_THEME_CLASS = "theme-text-alt";
const FRAME_STYLE_CLASSES = ["frame-style-ornate", "frame-style-minimal"];
const FALLBACK_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["fr", "en"];

const translations = {
  en: {
    metaDescription: "A warm, elegant wedding website for Thecla and Grégory.",
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
    heroText: "We're so happy to celebrate with you. Find the schedule, venue details, travel notes, and RSVP updates here.",
    saveTheDate: "Save the date<br>27th of March 2027",
    heroCardCopy: "Ceremony, reception, travel notes, and timeline will live here as the celebration takes shape.",
    storyTitle: "Our story",
    storyParagraph1: "This section is ready for your story as a couple: how you met, what brought you here, and the tone you want guests to feel from the first scroll.",
    storyParagraph2: "The layout stays spacious on desktop, easy to read on mobile, and flexible for richer content later.",
    celebrationTitle: "Celebration flow",
    ceremonyTitle: "Ceremony",
    ceremonyText: "A dedicated space for venue, arrival timing, and guest guidance.",
    receptionTitle: "Reception",
    receptionText: "Ideal for dinner plans, party highlights, and practical notes.",
    travelTitle: "Travel",
    travelText: "Share transportation options, nearby stays, and practical arrival guidance.",
    detailsTitle: "Key details",
    scheduleTitle: "Schedule",
    scheduleText: "Outline the timeline from welcome to farewell in a clean, readable format.",
    venueTitle: "Venue guide",
    venueText: "Add maps, directions, accessibility notes, and where guests should go first.",
    dressCodeTitle: "Dress code",
    dressCodeText: "Share the style of the day and any weather-specific recommendations.",
    faqTitle: "FAQ",
    faqText: "Reserve this area for common questions, plus thoughtful guest reminders.",
    rsvpTitle: "R.S.V.P.",
    rsvpText: "Your physical invitation includes a QR code that connects you to our digital guest experience through dywy. Simply scan the code to request your personalized magic link, then log in to complete your RSVP.<br><br>Through dywy, you'll be able to confirm your attendance, share your dietary preferences, and even add a song to our wedding dinner playlist. We're looking forward to celebrating with you!",
    footerText: "Made with love for a joyful celebration."
  },
  fr: {
    metaDescription: "Un site de mariage chaleureux et élégant pour Thecla et Grégory.",
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
    heroText: "Nous sommes très heureux de célébrer avec vous. Retrouvez le programme, les détails du lieu, les informations de voyage et les mises à jour du RSVP ici.",
    saveTheDate: "À retenir<br>27 mars 2027",
    heroCardCopy: "La cérémonie, la réception, les informations de voyage et le planning seront détaillés ici au fur et à mesure de la préparation.",
    storyTitle: "Notre histoire",
    storyParagraph1: "Cette section est prête pour votre histoire à deux : comment vous vous êtes rencontrés, ce qui vous a menés jusqu’ici et le ton que vous souhaitez faire ressentir aux invités dès le premier scroll.",
    storyParagraph2: "La mise en page reste spacieuse sur ordinateur, facile à lire sur mobile et souple pour accueillir du contenu plus riche plus tard.",
    celebrationTitle: "Déroulement de la célébration",
    ceremonyTitle: "Cérémonie",
    ceremonyText: "Un espace dédié au lieu, au timing d’arrivée et aux consignes pour les invités.",
    receptionTitle: "Réception",
    receptionText: "Idéal pour les plans du dîner, les moments forts de la soirée et les notes pratiques.",
    travelTitle: "Voyage",
    travelText: "Partagez les options de transport, les hébergements à proximité et les conseils pratiques pour l’arrivée.",
    detailsTitle: "Détails importants",
    scheduleTitle: "Programme",
    scheduleText: "Présentez le déroulement de l’accueil jusqu’au départ dans un format clair et lisible.",
    venueTitle: "Guide du lieu",
    venueText: "Ajoutez cartes, directions, informations d’accessibilité et la première étape à suivre pour les invités.",
    dressCodeTitle: "Code vestimentaire",
    dressCodeText: "Partagez le style de la journée et les recommandations selon la météo.",
    faqTitle: "FAQ",
    faqText: "Réservez cette zone pour les questions fréquentes et les rappels utiles aux invités.",
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
  const navigatorLanguage = navigator.language || navigator.languages?.[0] || FALLBACK_LANGUAGE;
  const normalizedLanguage = navigatorLanguage.toLowerCase().split("-")[0];

  if (SUPPORTED_LANGUAGES.includes(normalizedLanguage)) {
    return normalizedLanguage;
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

