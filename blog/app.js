document.addEventListener("DOMContentLoaded", function () {
  // Your blog data source
  const blogData = [
    {
      src: "images/251016-fall.webp",
      alt: "fall",
      date: "October 16, 2025",
      text: "Sunset and peak Fall colors at CMS",
    },
    {
      src: "images/250927-gtr-fest.webp",
      alt: "guitar fest",
      date: "September 27, 2025",
      text: "Sweetwater Guitar Fest",
    },
    {
      src: "images/250920-view.webp",
      alt: "view",
      date: "September 20, 2025",
      text: "Another gorgeous sunrise 7:16am.",
    },
    {
      src: "images/250913-jane.webp",
      alt: "birthday party",
      date: "September 13, 2025",
      text: "Happy 100th birthday, Grandma Jane!",
    },
    {
      src: "images/250912-rackets.webp",
      alt: "rackets",
      date: "September 12, 2025",
      text: "New tennis rackets from Dick's Sporting Goods.",
    },
    {
      src: "images/250907-usopen.webp",
      alt: "tv",
      date: "September 7, 2025",
      text: "Last US Open Tennis Final from the gazebo.",
    },
    {
      src: "images/250907-view.webp",
      alt: "view",
      date: "September 7, 2025",
      text: "Pre-workout sunrise 7:14am.",
    },
    {
      src: "images/250823-boxes.webp",
      alt: "boxes",
      date: "August 23, 2025",
      text: "17 boxes taken by Mark. $209/box.",
    },
    {
      src: "images/250811-mercedes.webp",
      alt: "car",
      date: "August 11, 2025",
      text: "2008 ML-350 sold to Scott.",
    },
    {
      src: "images/250808-cincy.webp",
      alt: "tennis court",
      date: "August 8, 2025",
      text: "Last time at the Cincinnati Open.",
    },
    {
      src: "images/250727-vhs.webp",
      alt: "vhs",
      date: "July 25, 2025",
      text: "Sold my VHS Collection.",
    },
    {
      src: "images/250703-selling.webp",
      alt: "toys",
      date: "July 3, 2025",
      text: "Starting the process of selling things.",
    },
    {
      src: "images/250630-wedding.webp",
      alt: "wedding",
      date: "June 30, 2025",
      text: "Areeya and Loc's wedding.",
    },
    {
      src: "images/250603-periphery.webp",
      alt: "concert",
      date: "June 3, 2025",
      text: "Periphery concert with Jason.",
    },
    {
      src: "images/250517-wedding.webp",
      alt: "wedding",
      date: "May 17, 2025",
      text: "Angela and Mikko's wedding.",
    },
    {
      src: "images/250508-house.webp",
      alt: "house",
      date: "May 8, 2025",
      text: "House in Vientiane, Laos purchased.",
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
          <p>${item.date}</p>
        <p>${item.text}</p>
      `;
      container.appendChild(article);
    });

    rotateCards();
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

  function rotateCards() {
    // Select all blog cards
    const cards = document.querySelectorAll(".blog-card");

    cards.forEach((card) => {
      // Randomly pick -2, 0, or 2 degrees
      const randomAngle = [-.4, 0.2, .4][Math.floor(Math.random() * 3)];
      card.style.transform = `rotate(${randomAngle}deg)`;
    });
  }
});
