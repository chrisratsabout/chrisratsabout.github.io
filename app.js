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
    text1: "ຄຣິສໄດ້ຖືກນໍາສະເໜີກ່ຽວກັບພື້ນຖານການຂຽນລະຫັດ (HTML ແລະ CSS) ໃນປີ 2011 ທີ່ມະຫາວິທະຍາໄລ Indiana, USA. ຫຼັງຈາກນັ້ນ, ລາວໄດ້ຮຽນຮູ້ການຂຽນໂປລແກລມແບບເຄື່ອນໄຫວແລະການພັດທະນາ backend ຈາກອາຈານຂອງລາວຢູ່ Tech Elevator. ຫຼັງຈາກນັ້ນ, ລາວໄດ້ສືບຕໍ່ສ້າງເວັບໄຊທ໌ທີ່ດຶງດູດສາຍຕາແລະເປັນຜູ້ ພັດທະນາກໍ່ສ້າງ Check4Tech, ເວັບໄຊທ໌ທີ່ເຊື່ອມຕໍ່ຜູ້ໃຊ້ກັບທຸກສື່ ສັງຄົມທີ່ມີຢູ່ຂອງລະບົບການຄຸ້ມຄອງສິນຄ້າໝັ້ນຄົງແລະສໍາຄັນຕໍ່ຜູ້ກູ້ໄພ."
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

  // document.querySelectorAll("[data-vendors]").forEach((el) => {
  //   const vendorsKey = el.getAttribute("data-vendors");
  //   el.textContent = vendorsTranslations[lang][vendorsKey] || vendorsKey;
  // });

  document.querySelectorAll("[data-contact]").forEach((el) => {
    const contactKey = el.getAttribute("data-contact");
    el.textContent = contactTranslations[lang][contactKey] || contactKey;
  });

  document.querySelectorAll("[data-lang]").forEach((el) => {
    const langKey = el.getAttribute("data-lang");
    el.textContent = langTranslations[lang][langKey] || langKey;
  });
}
