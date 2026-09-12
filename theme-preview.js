const ALT_THEME_CLASS = "theme-text-alt";
const FRAME_STYLE_CLASSES = ["frame-style-ornate", "frame-style-minimal"];

document.documentElement.classList.add("has-js");

const pageBody = document.body;
const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const rsvpSection = document.querySelector("#rsvp");
const desktopMediaQuery = window.matchMedia("(min-width: 72rem)");

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
    if (event.key === "Escape") {
      setNavOpenState(false);
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
initializeMobileMenu();
syncFooterFillHeight();

window.addEventListener("resize", syncFooterFillHeight);
desktopMediaQuery.addEventListener("change", syncFooterFillHeight);


