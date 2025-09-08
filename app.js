document.addEventListener("DOMContentLoaded", function () {
  setLanguage("en");
});

function setLanguage(lang) {
  const usFlagEl = document.querySelector(".us-flag");
  const laoFlagEl = document.querySelector(".lao-flag");
  if (lang === "en") {
    usFlagEl?.classList.add("active");
    laoFlagEl?.classList.remove("active");
  } else {
    laoFlagEl?.classList.add("active");
    usFlagEl?.classList.remove("active");
  }

  // document.querySelectorAll("[data-news]").forEach((el) => {
  //   const newsKey = el.getAttribute("data-news");
  //   el.textContent = newsTranslations[lang][newsKey] || newsKey;
  // });

  // document.querySelectorAll("[data-about]").forEach((el) => {
  //   const aboutKey = el.getAttribute("data-about");
  //   el.textContent = aboutTranslations[lang][aboutKey] || aboutKey;
  // });

  // document.querySelectorAll("[data-merch]").forEach((el) => {
  //   const merchKey = el.getAttribute("data-merch");
  //   el.textContent = merchTranslations[lang][merchKey] || merchKey;
  // });

  // document.querySelectorAll("[data-vendors]").forEach((el) => {
  //   const vendorsKey = el.getAttribute("data-vendors");
  //   el.textContent = vendorsTranslations[lang][vendorsKey] || vendorsKey;
  // });

  // document.querySelectorAll("[data-contact]").forEach((el) => {
  //   const contactKey = el.getAttribute("data-contact");
  //   el.textContent = contactTranslations[lang][contactKey] || contactKey;
  // });

  //   document.querySelectorAll("[data-lang]").forEach((el) => {
  //   const langKey = el.getAttribute("data-lang");
  //   el.textContent = langTranslations[lang][langKey] || langKey;
  // });
}