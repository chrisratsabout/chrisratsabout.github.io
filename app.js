//TRANSLATIONS
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
      "Chris was introduced to the basics of coding (HTML and CSS) in 2011 at Indiana University. Later on, he learned dynamic programming and backend development from his teacher at Tech Elevator. Afterwards, he went on to create visually appealing websites and became the lead software developer at Check4Tech, an inventory management system for first responders.",
  },
  la: {
    title: "ກ່ຽວກັບ",
    text1:
      "ຄຣິສໄດ້ຖືກນໍາສະເໜີກ່ຽວກັບພື້ນຖານການຂຽນລະຫັດ (HTML ແລະ CSS) ໃນປີ 2011 ທີ່ມະຫາວິທະຍາໄລ Indiana, USA. ຫຼັງຈາກນັ້ນ, ລາວໄດ້ຮຽນຮູ້ການຂຽນໂປລແກລມແບບເຄື່ອນໄຫວແລະການພັດທະນາ backend ຈາກອາຈານຂອງລາວຢູ່ Tech Elevator. ຫຼັງຈາກນັ້ນ, ລາວໄດ້ສືບຕໍ່ສ້າງເວັບໄຊທ໌ທີ່ດຶງດູດສາຍຕາແລະເປັນຜູ້ ພັດທະນາກໍ່ສ້າງ Check4Tech, ເວັບໄຊທ໌ທີ່ເຊື່ອມຕໍ່ຜູ້ໃຊ້ກັບທຸກສື່ ສັງຄົມທີ່ມີຢູ່ຂອງລະບົບການຄຸ້ມຄອງສິນຄ້າໝັ້ນຄົງແລະສໍາຄັນຕໍ່ຜູ້ກູ້ໄພ.",
  },
};

const facebookTranslations = {
  en: {
    text1: "Facebook pages are limited and generic.",
  },
  la: {
    text1: "ຫນ້າເຟສບຸກແມ່ນຈໍາກັດແລະທົ່ວໄປ.",
  },
};

const uniqueTranslations = {
  en: {
    text1: "Be informative and unique!",
  },
  la: {
    text1: "ເປັນຂໍ້ມູນແລະເປັນເອກະລັກ!",
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
    title: "ສ່ວນຕົວແລ້ວ",
    text1:
      "ມີການແບ່ງ​ປັນ​ຄວາມ​ສາ​ມາດ​ໃຫ້ແກ່ທ່ານຜູ້ໃດມີ ຄວາມ​ສົນ​ໃຈ​, ຢາກມີວຽກ​ເຮັດ​ງານ​ທໍາ​, ແລະ​ອື່ນໆ​ກັບ​ຫມູ່​ເພື່ອນ​, ຄອບ​ຄົວ​, ແລະ​ນາຍ​ຈ້າງ​ທີ່​ມີ​ຄວາມເຊຶ່ອຫມັ້ນແລະ ສ້າງຄວາມປະທັບໃຈທີ່ດີ. ໃກການຕະຫຼາດຂອງທ່ານເອງແລະສະແດງໃຫ້ເຫັນສິ່ງທີ່ທ່ານສາມາດເຮັດໄດ້!",
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
      "ສະແດງທຸລະກິດ, ຜະລິດຕະພັນ, ຫຼືການບໍລິການຂອງທ່ານ. ໃຫ້ລາຍລະອຽດຫຼາຍຢ່າງເພື່ອດຶງດູດລູກຄ້າແລະລູກຄ້າຫຼາຍຂຶ້ນ.",
  },
};

const artistTranslations = {
  en: {
    title: "Artist, artisan, musician, podcast, etc.",
    text1:
      "Send fans and those interested in your work to your site. Display a photo gallery or link to music and video streaming platforms.",
  },
  la: {
    title: "ນັກສິລະປິນ, ຊ່າງຝີມື, ນັກດົນຕຣີ, ພອດແຄສ, ແລະອື່ນໆ",
    text1:
      "ສົ່ງແຟນໆ ແລະຜູ້ທີ່ສົນໃຈໃນວຽກຂອງທ່ານໄປຫາເວັບໄຊທ໌ຂອງທ່ານສະ​ແດງ​ຄັງ​ຮູບ​ພາບ​ຫຼື​ການ​ເຊື່ອມ​ຕໍ່​ກັບ​ດົນ​ຕີ​ແລະ​ວິ​ດີ​ໂອ​ເວ​ທີ​ການ​ນ​້​ໍ​າ​.",
  },
};

const portfolioTranslations = {
  en: {
    title: "Portfolio",
  },
  la: {
    title: "ຫຼັກຊັບ",
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

  document.querySelectorAll("[data-lang]").forEach((el) => {
    const langKey = el.getAttribute("data-lang");
    el.textContent = langTranslations[lang][langKey] || langKey;
  });
}
