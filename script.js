import { translations } from "./translations.js";

const langToggle = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("language") || "en";

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  langToggle.textContent = lang === "en" ? "GE" : "ENG";
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ge" : "en";
  updateLanguage(currentLang);
});

updateLanguage(currentLang);
