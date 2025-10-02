document.addEventListener("DOMContentLoaded", function () {
  // Your blog data source
  const blogData = [
    {
      src: "images/240822-jungle-jims.webp",
      alt: "jungle jim's",
      location: "Cincinnati, Ohio",
      flag: "🇺🇸",
      date: "August 22, 2024",
      text: "Some interational snacks purchased at Jungle Jim's",
    },
    {
      src: "images/230407-giordanos.webp",
      alt: "giordano's",
      location: "Fort Wayne, Indiana",
      flag: "🇺🇸",
      date: "April 7, 2023",
      text: "Eating at Chicago-based pizza joint, Giordano's, in its grand opening week.",
    },
    {
      src: "images/230322-mcdonalds.webp",
      alt: "McDonald's Rome",
      location: "Rome, Italy",
      flag: "🇮🇹",
      date: "March 22, 2023",
      text: "Visiting the first McDonald's in Rome",
    },
    {
      src: "images/230321-jollibee.webp",
      alt: "Jollibee Vatican",
      location: "Rome, Italy",
      flag: "🇮🇹",
      date: "March 21, 2023",
      text: "Trying Jollibee for the first time - spaghetti, chicken, burger, etc.",
    },
    {
      src: "images/230320-vatican.webp",
      alt: "Vatican City",
      location: "Vatican City",
      flag: "🇻🇦",
      date: "March 21, 2023",
      text: "Breakfast at the Vatican Museum - eggs, potatoes, bacon, meats, cheese, yogurt, waffles",
    },
    {
      src: "images/230318-la-nueva-ferreteria.webp",
      alt: "La nueva ferreteria",
      location: "Ávila, Spain",
      flag: "🇪🇸",
      date: "March 18, 2023",
      text: "Breakfast at La nueva ferretería - cruasan, churros, tostada con tomate y café con leche",
    },
    {
      src: "images/230318-fiorucci.webp",
      alt: "Dinner at Fiorucci",
      location: "Collado Villalba, Madrid, Spain",
      flag: "🇪🇸",
      date: "March 18, 2023",
      text: "Dinner at Fiorucci - hamburguesa mixta con patatas",
    },
    {
      src: "images/230317-la-gran-muralla.webp",
      alt: "Dinner at La gran muralla",
      location: "Collado Villalba, Madrid, Spain",
      flag: "🇪🇸",
      date: "March 17, 2023",
      text: "Dinner at La gran muralla - ",
    },
    {
      src: "images/230317-carrefour.webp",
      alt: "Watermelon Fanta at Carrefour",
      location: "Collado Villalba, Madrid, Spain",
      flag: "🇪🇸",
      date: "March 17, 2023",
      text: "Watermelon Fanta from Carrefour ",
    },
    {
      src: "images/230316-fiorucci.webp",
      alt: "Breakfast at Fiorucci",
      location: "Collado Villalba, Madrid, Spain",
      flag: "🇪🇸",
      date: "March 16, 2023",
      text: "First breakfast at Fiorucci. ¡Lo mejor!",
    },
    {
      src: "images/230315-iberia.webp",
      alt: "Iberia flight dinner",
      location: "Chicago - Madrid",
      flag: "🇺🇸 🇪🇸",
      date: "March 15, 2023",
      text: "Curry dinner on Iberia flight to Madrid",
    },
  ];

  const container = document.querySelector(".blog-container");
  const filterInput = document.getElementById("filter-input");
  const sortSelect = document.getElementById("sort-select");
  const monthSelect = document.getElementById("month-select");
  const yearSelect = document.getElementById("year-select");

  function renderPosts(posts) {
    container.innerHTML = "";
    posts.forEach((item) => {
      const article = document.createElement("article");
      article.className = "blog-card";

      article.innerHTML = `
        <img src="${item.src}" alt="${item.alt}" loading="lazy">
       <div class="date-box"> <i class="fa-solid fa-calendar"></i>  <p>${item.date}</p></div>
            <p>${item.flag}${" "}${item.location}</p>
        <p>${item.text}</p>
      `;
      container.appendChild(article);
    });
  }

  function parseDate(dateStr) {
    return new Date(dateStr);
  }

  function updatePosts() {
    const query = filterInput.value.toLowerCase();
    const sortBy = sortSelect.value;
    const selectedMonth = monthSelect.value;
    const selectedYear = yearSelect.value;

    let filtered = blogData.filter((item) => {
      const d = parseDate(item.date);

      // text filter
      const matchesText =
        item.text.toLowerCase().includes(query) ||
        item.alt.toLowerCase().includes(query);

      // month filter
      const matchesMonth =
        selectedMonth === "" || d.getMonth().toString() === selectedMonth;

      // year filter
      const matchesYear =
        selectedYear === "" || d.getFullYear().toString() === selectedYear;

      return matchesText && matchesMonth && matchesYear;
    });

    // sort
    filtered.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });

    renderPosts(filtered);
  }

  // initial render
  renderPosts(blogData);

  // listeners
  filterInput.addEventListener("input", updatePosts);
  sortSelect.addEventListener("change", updatePosts);
  monthSelect.addEventListener("change", updatePosts);
  yearSelect.addEventListener("change", updatePosts);
});
