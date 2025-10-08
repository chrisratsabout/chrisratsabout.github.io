function changeHamburgerBackground() {
  const navBar = document.querySelector(".navbar");
  let scrollValue = window.scrollY;
  if (scrollValue > 100) {
    navBar.style.boxShadow = "0 2px 4px #0003, 0 6px 20px #00000030";
  } else {
    navBar.style.boxShadow = "none";
  }
}
window.addEventListener("scroll", changeHamburgerBackground);


//TRANSLATIONS
const headerTranslations = {
  en: {
    title: "Chris Ratsabout",
    text1: "Web Developer",
  },
  la: {
    title: "ຄຣິສ ຣາດສາບຸຊ",
    text1: "ນັກພັດທະນາ ເວັບໄຊ້",
  },
};

const langTranslations = {
  en: {
    title: "Language:",
  },
  la: {
    title: "ພາສາ:",
  },
};

const aboutTranslations = {
  en: {
    title: "About",
    text1:
      "Chris was introduced to the basics of coding (HTML and CSS) in 2011 at Indiana University.",
      text2: "Later on, he learned dynamic programming and backend development from his teacher at Tech Elevator.",
      text3: "Afterwards, he went on to create visually appealing websites and became the lead software developer at Check4Tech, an inventory management system for first responders."
  },
  la: {
    title: "ກ່ຽວກັບ",
    text1:
      "ຄຣິສໄດ້ເລີ່ມຮຽນຮູ້ພື້ນຖານກ່ຽວກັບການຂຽນໂຄ້ດ (HTML ແລະ CSS) ໃນປີ 2011 ທີ່ມະຫາວິທະຍາໄລ Indiana, USA.",
      text2: "ຕໍ່ມາ, ລາວໄດ້ຮຽນຮູ້ການຂຽນໂປລແກຣມແບບເຄື່ອນໄຫວ ແລະ ການພັດທະນາ ລະບົບຫລັງບ້ານ (backend development) ຈາກອາຈານສອນຢູ່ Tech Elevator. ",
      text3: "ຫຼັງຈາກນັ້ນ, ລາວໄດ້ສືບຕໍ່ສ້າງເວັບໄຊທ໌ທີ່ຫນ້າສົນໃຈ ແລະ ກາຍເປັນ ຜູ້ພັດທະນາໂປຣແກມ ທີ່ບໍລິສັດ Check4Tech, ເຊິ່ງເປັນລະບົບຈັດການລາຍການສິນຄ້າສໍາລັບຫນ່ວຍກູ້ໄພ."
  },
};

const facebookTranslations = {
  en: {
    text1: "Facebook pages are limited and generic.",
  },
  la: {
    text1: "ຫນ້າເຟສບຸກແມ່ນຈໍາກັດ ແລະ ທົ່ວໄປ.",
  },
};

const uniqueTranslations = {
  en: {
    text1: "Be informative and unique!",
  },
  la: {
    text1: "ໃຫ້ຂໍ້ມູນທີ່ດີ ແລະ ມີເອກະລັກ!",
  },
};

const benefitTranslations = {
  en: {
    text1: "Anybody can benefit from a website.",
  },
  la: {
    text1: "ທຸກໆທ່ານສາມາດໄດ້ຮັບຜົນປະໂຫຍດຈາກເວັບໄຊທ໌.",
  },
};

const contactTranslations = {
  en: {
    title: "Contact",
    text1: "Name:",
    text2: "Email:",
    text3: "Message:",
    text4: "Submit",
  },
  la: {
    title: "ຕິດຕໍ່",
    text1: "ຊື່:",
    text2: "ອີເມວ:",
    text3: "ຂໍ້ຄວາມ:",
    text4: "ສົ່ງ",
  },
};

const personalTranslations = {
  en: {
    title: "Personal",
    text1:
      "Share your skills, interests, hobbies, etc. with friends, family, and potential employers. Make a good impression. Market yourself and show what you can do!",
  },
  la: {
    title: "ຂໍ້ມູນສ່ວນຕົວ",
    text1:
      "ແລກປ່ຽນຄວາມຮູ້, ຄວາມ​ສົນ​ໃຈ​, ຄວາມມັກ​, ແລະ​ອື່ນໆ ​ກັບ​ຫມູ່​ເພື່ອນ​, ຄອບ​ຄົວ​, ແລະ ​ນາຍ​ຈ້າງ​ໃນອານາຄົດ ສ້າງ​ຄວາມປະທັບໃຈທີ່ດີ, ນໍາສະເຫນີໂຕເອງ ແລະ ສະແດງສິ່ງທີ່ທ່ານສາມາດເຮັດໄດ້!",
  },
};

const businessTranslations = {
  en: {
    title: "Business",
    text1:
      "Showcase your business, product, or service. Provide plenty of details to draw in more customers and clients.",
  },
  la: {
    title: "ທຸລະກິດ",
    text1:
      "ນໍາສະເຫນີທຸລະກິດ, ຜະລິດຕະພັນ, ຫຼື ການບໍລິການຂອງທ່ານ. ໃຫ້ລາຍລະອຽດທີ່ຄົບຖ້ວນເພື່ອດຶງດູດຄວາມສົນໃຈຂອງລູກຄ້າ ແລະ ຄູ່ຮ່ວມງານຫຼາຍຂຶ້ນ.",
  },
};

const artistTranslations = {
  en: {
    title: "Artist, artisan, musician, podcast, etc.",
    text1:
      "Send fans and those interested in your work to your site. Display a photo gallery or link to music and video streaming platforms.",
  },
  la: {
    title: "ນັກສິລະປິນ, ຊ່າງຝີມື, ນັກດົນຕີ, ພອດແຄສ, ແລະ ອື່ນໆ",
    text1:
      "ພາຜູ້ທີ່ມັກຜົນງານຂອງທ່ານ ໄປທີ່ເວັບໄຊທ໌. ສະ​ແດງ​ຄັງ​ຮູບ​ພາບ ​ຫຼື​ ເຊື່ອມ​ຕໍ່​ກັບຊ່ອງທາງຟັງເພັງ​ດົນ​ ຫລື ເບິ່ງວິດີໂອຂອງທ່ານໄດ້ເລີຍ.",
  },
};

const portfolioTranslations = {
  en: {
    title: "Portfolio",
  },
  la: {
    title: "ຫຜົນງານ",
  },
};

const pricingTranslations = {
  en: {
    title: "Start Pricing",
    text1:
      "Chris promises an affordable and easy-to-use website that loads fast and displays properly on all devices. He strives to meet all his clients' needs in a timely manner and promptly respond to their questions and requests.",
    text2: "First Year: $120",
    text3: "2.500.000 LAK",
    text4: "4000 THB",
    text5: "Price Includes:",
    text6: "Web design (how it will look)",
    text7: "Web development (coding and deploying it)",
    text8: "Website domain name (dot com)",
    text9:
      "One landing page (header, about, contact, and 2 sections of your choice)",
    text10: "Website that links users to all your existing social media",
    text11: "*After First Year: $100",
    text12: "2.150.000 LAK",
    text13: "3200 THB",
    text14: "Yearly Price Includes:",
    text15: "Routine Maintenance",
    text16: "Unlimited edits (additions/revisions to existing sections)",
    text17: "Keep your domain name (dot com)",
    text18:
      "Note: This will be a yearly fee to make sure your website stays up to date.",
  },
  la: {
    title: "ລາຄາ",
    text1:
      "ຄຣິສ ສັນຍາວ່າຈະສ້າງເວັບໄຊທ໌ທີ່ມີລາຄາບໍ່ແພງ ແລະ ໃຊ້ງານງ່າຍ, ໂຫລດໄວ ແລະ ນໍາສະເຫນີຜົນງານຢ່າງສວຍງາມໃນທຸກອຸປະກອນ. ລາວພະຍາຍາມຢ່າງເຕັມທີ່ເພື່ອໃຫ້ໄດ້ຕາມຄວາມຕ້ອງການຂອງລູກຄ້າຕາມເວລາທີ່ກໍານົດ, ຕອບຄໍາຖາມ ແລະ ຂໍ້ສົງໄສຂອງລູກຄ້າໄດ້ຢ່າງວ່ອງໄວ.",
    text2: "ປີທໍາອິດ: $120",
    text3: "2.500.000 ກີບ",
    text4: "4000 ບາດ",
    text5: "ລາຄານີ້ລວມມີ:",
    text6: "ການອອກແບບເວັບໄຊທ໌ (ຮູບແບບ ແລະ ຄວາມສວຍງາມ)",
    text7: "ການ​ພັດ​ທະ​ນາ​ເວັບ​ໄຊ​ຕ​໌ (ການ​ຂຽນ​ໂຄ້ດ ​ແລະ​ ການ​ນໍາ​ໃຊ້​)",
    text8: "ຊື່ໂດເມນເວັບໄຊທ໌ (dot com)",
    text9:
      "ໜ້າຫລັກຫນຶ່ງຫນ້າ (ສ່ວນຫົວຂໍ້, ກ່ຽວກັບ, ຕິດຕໍ່ພົວພັນ, ແລະ 2 ພາກສ່ວນທີ່ທ່ານຕ້ອງການ)",
    text10:
      "ເວັບໄຊທ໌ທີ່ລິ້ງກັບທຸກສື່ສັງຄົມອອນລາຍຂອງທ່ານທີ່ມີຢູ່ແລ້ວ.",
    text11: "ຫຼັງຈາກປີທໍາອິດ: $100",
    text12: "2.150.000 ກີບ",
    text13: "3200ບາດ",
    text14: "ຄ່າໃຊ້ຈ່າຍປະຈໍາປີປະກອບມີ:",
    text15: "ການບໍາລຸງຮັກສາເປັນປະຈໍາ",
    text16:
      "ການ​ແກ້​ໄຂຂໍ້ມູນແບບ​ບໍ່​ຈໍາ​ກັດ (ການ​ເພີ່ມ​ / ດັດ​ແກ້​​ໃນ​ພາກ​ສ່ວນ​ທີ່​ມີ​ຢູ່​ແລ້ວ​)",
    text17: "ຮັກສາຊື່ໂດເມນ (dot com)",
    text18: "ຫມາຍເຫດ: ນີ້ຈະເປັນຄ່າບໍລິການລາຍປີເພື່ອໃຫ້ແນ່ໃຈວ່າເວັບໄຊທ໌ຂອງທ່ານຍັງຄົງອັບເດດຢູ່.",
  },
};

const faqTranslations = {
  en: {
    text1: "What is Chris’s mission?",
    text2:
      "He wants to help people and businesses proudly display what they offer and see them thrive.",
    text3: "Can’t I use a website builder like Squarespace, Wix, Weebly, etc.?",
    text4:
      "Of course! However, these tools are limited and generic. If you want 100% customization, tell Chris what you want and he will get the job done for you.",
    text5: "Can’t I just use AI?",
    text6:
      "Sure, AI is great! If you can make additions and maintain your site with it, it can be a helpful tool.",
    text7: "Do I need to have a “dot com”?",
    text8:
      "No, but a 'dot com' domain is considered professional and widely used. If you want a site without a 'dot com', please contact Chris.",
    text9:
      "What if I want to add more sections, have multiple pages for my website or something more complex?",
    text10:
      "Accommodations can always be made. Please contact Chris to discuss the details.",
  },
  la: {
    text1: "ພາລະກິດຂອງຄຣິສແມ່ນຫຍັງ?",
    text2:
      "ລາວຕ້ອງການຊ່ວຍເຫລືອຜູ້ຄົນ ແລະ ທຸລະກິດ ໃຫ້ມີໂອກາດສະແດງສິ່ງທີ່ຕົນເອງມີແບບພູມໃຈ ແລະ ປະສົບຜົນສໍາເລັດ.",
    text3:
      "ຂ້ອຍສາມາດໃຊ້ໂປຣແກຣມສ້າງເວັບໄຊທ໌ເຊັ່ນ Squarespace, Wix, Weebly, ແລະ ອື່ນໆໄດ້ບໍ?",
    text4:
      "ແນ່ນອນ ໃຊ້ໄດ້! ແຕ່ ເຄື່ອງມືເຫຼົ່ານີ້ແມ່ນມີຂໍ້ຈໍາກັດ ແລະ ມີຮຸບແບບທົ່ວໄປ. ຖ້າທ່ານຕ້ອງການການປັບແຕ່ງ 100%, ບອກ ຄຣິສ ໄດ້ເລີຍ ເພາະລາວສາມາດສ້າງໃຫ້ໄດ້ຕາມທີ່ທ່ານຕ້ອງການ.",
    text5: "ຂ້ອຍສາມາດໃຊ້ພຽງແຕ່ AI ໄດ້ບໍ?",
    text6:
      "ແນ່ນອນ, AI ແມ່ນດີຫຼາຍ! ຖ້າທ່ານສາມາດໃຊ້ AI  ປັບປຸງ ແລະ ຮັກສາເວັບໄຊທ໌ຂອງທ່ານ ໄດ້. AI ກໍຖືເປັນເຄື່ອງມືທີ່ເປັນປະໂຫຍດຫລາຍ.",
    text7: "ຂ້ອຍຈໍາເປັນຕ້ອງມີ 'dot com' ບໍ?",
    text8:
      "ບໍ່ຈໍາເປັນ, ແຕ່ໂດເມນ 'dot com' ຖືວ່າມີຄວາມເປັນມືອາຊີບ ແລະ ເປັນມາດຕະຖານຖືກນໍາໃຊ້ທົ່ວໄປ. ຖ້າທ່ານຕ້ອງການເວັບໄຊທ໌ທີ່ບໍ່ມີ 'dot com', ຕິດຕໍ່ ຄຣິສ ໄດ້ເລີຍ.",
    text9:
      "ຖ້າຂ້ອຍຢາກເພິ່ມສ່ວນຕ່າງໆ,ມີຫລາຍຫນ້າໃນເວັບໄຊທ໌ ຫລື ສິ່ງທີ່ສັບຊ້ອນກວ່ານັ້ນຈະໄດ້ບໍ?",
    text10:
      "ສາມາດເຮັດໄດ້. ກະລຸນາຕິດຕໍ່ ຄຣິສ ເພື່ອປຶກສາລາຍລະອຽດ ເພີ່ມເຕີມ.",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  setLanguage("en");
});

function setLanguage(lang) {
  const usFlagEl = document.querySelector(".us-flag");
  const laoFlagEl = document.querySelector(".lao-flag");
  if (lang === "en") {
    usFlagEl?.classList.add("active");
    laoFlagEl?.classList.remove("active");
    document.body.classList.remove("lao-font");
    document.body.classList.add("english-font");
  } else {
    laoFlagEl?.classList.add("active");
    usFlagEl?.classList.remove("active");
    document.body.classList.remove("english-font");
    document.body.classList.add("lao-font");
  }

  document.querySelectorAll("[data-facebook]").forEach((el) => {
    const fbKey = el.getAttribute("data-facebook");
    el.textContent = facebookTranslations[lang][fbKey] || fbKey;
  });

  document.querySelectorAll("[data-about]").forEach((el) => {
    const aboutKey = el.getAttribute("data-about");
    el.textContent = aboutTranslations[lang][aboutKey] || aboutKey;
  });

  document.querySelectorAll("[data-unique]").forEach((el) => {
    const uniqueKey = el.getAttribute("data-unique");
    el.textContent = uniqueTranslations[lang][uniqueKey] || uniqueKey;
  });

  document.querySelectorAll("[data-benefit]").forEach((el) => {
    const benefitKey = el.getAttribute("data-benefit");
    el.textContent = benefitTranslations[lang][benefitKey] || benefitKey;
  });

  document.querySelectorAll("[data-personal]").forEach((el) => {
    const personalKey = el.getAttribute("data-personal");
    el.textContent = personalTranslations[lang][personalKey] || personalKey;
  });

  document.querySelectorAll("[data-business]").forEach((el) => {
    const businessKey = el.getAttribute("data-business");
    el.textContent = businessTranslations[lang][businessKey] || businessKey;
  });

  document.querySelectorAll("[data-contact]").forEach((el) => {
    const contactKey = el.getAttribute("data-contact");
    el.textContent = contactTranslations[lang][contactKey] || contactKey;
  });

  document.querySelectorAll("[data-artist]").forEach((el) => {
    const artistKey = el.getAttribute("data-artist");
    el.textContent = artistTranslations[lang][artistKey] || artistKey;
  });

  document.querySelectorAll("[data-portfolio]").forEach((el) => {
    const portfolioKey = el.getAttribute("data-portfolio");
    el.textContent = portfolioTranslations[lang][portfolioKey] || portfolioKey;
  });

  document.querySelectorAll("[data-pricing]").forEach((el) => {
    const pricingKey = el.getAttribute("data-pricing");
    el.textContent = pricingTranslations[lang][pricingKey] || pricingKey;
  });

  document.querySelectorAll("[data-faq]").forEach((el) => {
    const faqKey = el.getAttribute("data-faq");
    el.textContent = faqTranslations[lang][faqKey] || faqKey;
  });

  document.querySelectorAll("[data-header]").forEach((el) => {
    const headerKey = el.getAttribute("data-header");
    el.textContent = headerTranslations[lang][headerKey] || headerKey;
  });

  document.querySelectorAll("[data-lang]").forEach((el) => {
    const langKey = el.getAttribute("data-lang");
    el.textContent = langTranslations[lang][langKey] || langKey;
  });
}

//FADE IN
const fadeIn = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeInObserver.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn.forEach((fade) => {
  fadeInObserver.observe(fade);
});

const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-menu a");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});