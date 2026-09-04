const THEME_STORAGE_KEY = "wedding-text-theme";
const ALT_THEME_CLASS = "theme-text-alt";

const themeToggle = document.querySelector("[data-theme-toggle]");
const pageBody = document.body;

function updateToggleLabel(isAltTheme) {
  if (!themeToggle) {
    return;
  }

  themeToggle.textContent = isAltTheme
    ? "Preview default text color"
    : "Preview alternate text color";
  themeToggle.setAttribute("aria-pressed", String(isAltTheme));
}

function applyTheme(isAltTheme) {
  pageBody.classList.toggle(ALT_THEME_CLASS, isAltTheme);
  updateToggleLabel(isAltTheme);
}

function readInitialThemePreference() {
  const queryParams = new URLSearchParams(window.location.search);
  const queryTheme = queryParams.get("textColor");

  if (queryTheme === "alt") {
    return true;
  }

  if (queryTheme === "default") {
    return false;
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) === "alt";
}

let isAltTheme = readInitialThemePreference();
applyTheme(isAltTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    isAltTheme = !isAltTheme;
    applyTheme(isAltTheme);

    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      isAltTheme ? "alt" : "default"
    );
  });
}


