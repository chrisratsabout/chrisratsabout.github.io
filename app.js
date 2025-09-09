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
      "ຄຣິສສັນຍາວ່າເວັບໄຊທ໌ທີ່ມີລາຄາບໍ່ແພງແລະໃຊ້ງ່າຍທີ່ໂຫລດໄວແລະສະແດງຜົນຢ່າງຖືກຕ້ອງໃນທຸກອຸປະກອນ. ລາວພະຍາຍາມຕອບສະຫນອງຄວາມຕ້ອງການຂອງລູກຄ້າທັງຫມົດໃນລັກສະນະທີ່ທັນເວລາແລະຕອບຄໍາຖາມແລະຄໍາຮ້ອງຂໍແລະຕອບສະໜອງພວກທ່ານ.",
    text2: "ປີທໍາອິດ: $120",
    text3: "2.500.000 ກີບ",
    text4: "4000 ບາດ",
    text5: "ລາຄາລວມ:",
    text6: "ການອອກແບບເວັບ (ມັນຈະມີລັກສະນະແນວໃດ)",
    text7: "ການ​ພັດ​ທະ​ນາ​ເວັບ​ໄຊ​ຕ​໌ (ການ​ຂຽນ​ລະ​ຫັດ​ແລະ​ການ​ນໍາ​ໃຊ້​ມັນ​)",
    text8: "ຊື່ໂດເມນເວັບໄຊທ໌ (dot com)",
    text9:
      "ໜ້າທຳອິດທີ່ພົບເຫັນ (ສ່ວນຫົວຂໍ້, ກ່ຽວກັບ, ຕິດຕໍ່ພົວພັນ, ແລະ 2 ພາກສ່ວນທີ່ທ່ານເລືອກ)",
    text10:
      "ໜ້າທຳອິດທີ່ພົບເຫັນ (ສ່ວນຫົວຂໍ້, ກ່ຽວກັບ, ຕິດຕໍ່ພົວພັນ, ແລະ 2 ພາກສ່ວນທີ່ທ່ານເລືອກ)ເວັບໄຊທ໌ທີ່ເຊື່ອມຕໍ່ຜູ້ໃຊ້ກັບທຸກສື່ສັງຄົມທີ່ມີຢູ່ຂອງທ່ານ.",
    text11: "ຫຼັງຈາກປີທໍາອິດ: $100",
    text12: "2.150.000 ກີບ",
    text13: "3200ບາດ",
    text14: "ລາຄາຕໍ່ປີລວມມີ:",
    text15: "ບໍາລຸງຮັກສາເປັນປົກກະຕິ",
    text16:
      "ບໍາລຸງຮັກສາເປັນປົກກະຕິການ​ແກ້​ໄຂ​ບໍ່​ຈໍາ​ກັດ (ການ​ເພີ່ມ​ເຕີມ / ການ​ແກ້​ໄຂ​ໃນ​ພາກ​ສ່ວນ​ທີ່​ມີ​ຢູ່​ແລ້ວ​)",
    text17: "ຮັກສາຊື່ໂດເມນຂອງທ່ານ (dot com)",
    text18: "ນີ້ຈະເປັນຄ່າທໍານຽມປະຈໍາປີເພື່ອໃຫ້ແນ່ໃຈວ່າເວັບໄຊທ໌ຂອງທ່ານຄົງຢູ່.",
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

  document.querySelectorAll("[data-lang]").forEach((el) => {
    const langKey = el.getAttribute("data-lang");
    el.textContent = langTranslations[lang][langKey] || langKey;
  });
}
