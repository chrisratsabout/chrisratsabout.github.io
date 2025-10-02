document.addEventListener("DOMContentLoaded", function () {
  // Your blog data source
  const blogData = [
    {
      src: "images/240822-jungle-jims.webp",
      alt: "Jungle Jim's",
      location: "Cincinnati, Ohio",
      url: "https://maps.app.goo.gl/4adZHWZsKk9Y4ZKZ9",
      flag: "us",
      date: "August 22, 2024",
      text: "Some interational snacks purchased at Jungle Jim's",
    },
    {
      src: "images/230407-giordanos.webp",
      alt: "Giordano's",
      location: "Fort Wayne, Indiana",
      flag: "us",
      url: "https://maps.app.goo.gl/gUaSsSTbX9XwwPuK9",
      date: "April 7, 2023",
      text: "Eating at the Chicago-based pizza joint during its grand opening week.",
    },
    {
      src: "images/230322-mcdonalds.webp",
      alt: "McDonald's",
      location: "Rome, Italy",
      flag: "it",
      url: "https://maps.app.goo.gl/myZcZ7EHbUxQeKu77",
      date: "March 22, 2023",
      text: "Visiting the first McDonald's in Rome close to Piazza de Spagna.",
    },
    {
      src: "images/230321-jollibee.webp",
      alt: "Jollibee Vatican",
      location: "Rome, Italy",
      flag: "it",
      url: "https://maps.app.goo.gl/d8QjvdWEL9H9qYqd8",
      date: "March 21, 2023",
      text: "Trying the Filipino chain for the first time - spaghetti, chicken, burger, etc.",
    },
    {
      src: "images/230320-vatican.webp",
      alt: "Vatican City",
      location: "Vatican City",
      flag: "vc",
      url: "https://maps.app.goo.gl/Q6cpQoabC7YnwQc67",
      date: "March 21, 2023",
      text: "Breakfast at the Vatican Museum - eggs, potatoes, bacon, meats, cheese, yogurt, waffles",
    },
    {
      src: "images/230318-la-nueva-ferreteria.webp",
      alt: "La nueva ferreteria",
      location: "Ávila, Spain",
      flag: "sp",
      url: "https://maps.app.goo.gl/9CJGTtowZmEq2J9g6",
      date: "March 18, 2023",
      text: "Breakfast - cruasan, churros, tostada con tomate y café con leche",
    },
    {
      src: "images/230318-fiorucci.webp",
      alt: "Fiorucci",
      location: "Collado Villalba, Madrid, Spain",
      flag: "sp",
      url: "https://maps.app.goo.gl/g4Sbu3YVjNW8FE2e9",
      date: "March 18, 2023",
      text: "Dinner at Fiorucci - hamburguesa mixta con patatas",
    },
    {
      src: "images/230317-la-gran-muralla.webp",
      alt: "Restaurante Grandeza Oriental",
      location: "Collado Villalba, Madrid, Spain",
      flag: "sp",
      url: "https://maps.app.goo.gl/cpYAtrZ5BFYZkWcu6",
      date: "March 17, 2023",
      text: "Dinner at La gran muralla - ",
    },
    {
      src: "images/230317-carrefour.webp",
      alt: "Watermelon Fanta at Carrefour",
      location: "Collado Villalba, Madrid, Spain",
      flag: "sp",
      url: "https://maps.app.goo.gl/sT6V2pXW6imCFtFCA",
      date: "March 17, 2023",
      text: "Watermelon Fanta from Carrefour ",
    },
    {
      src: "images/230316-fiorucci.webp",
      alt: "Breakfast at Fiorucci",
      location: "Collado Villalba, Madrid, Spain",
      flag: "sp",
      url: "https://maps.app.goo.gl/g4Sbu3YVjNW8FE2e9",
      date: "March 16, 2023",
      text: "First breakfast at Fiorucci. ¡Lo mejor!",
    },
    {
      src: "images/230315-iberia.webp",
      alt: "Iberia Flight",
      location: "Chicago - Madrid",
      flag: "sp",
      url: "#",
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
        <img src="${item.src}" alt="${item.alt}" loading="lazy" class="blog-image">
         <div class="date-box"><i class="fa-solid fa-link"></i>  <a href="${item.url}" target="_blank">${item.alt}</a></div>
       <div class="date-box"> <i class="fa-solid fa-calendar"></i>  <p>${item.date}</p></div>
   <div class="date-box">
    <img src="images/${item.flag}.webp" alt="${item.location}" class="flag" />
    <p>${item.location}</p>
  </div>
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
        item.alt.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.date.toLowerCase().includes(query);

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
