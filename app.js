
//CARD CLASS INTERSECTION OBSERVER 
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

cards.forEach(card => {
    observer.observe(card)
})

//MIDDLE CARD CLASS INTERSECTION OBSERVER 
const middleCards = document.querySelectorAll(".middle-card");

const middleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

middleCards.forEach(card => {
    observer.observe(card)
})

//RIGHT VERTICAL CARD CLASS INTERSECTION OBSERVER 
const rightVerticalCards = document.querySelectorAll(".right-vertical-card");

const rightVerticalObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

rightVerticalCards.forEach(card => {
    observer.observe(card)
})

//LEFT CARD CLASS INTERSECTION OBSERVER 
const leftCards = document.querySelectorAll(".left-card");

const leftObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

leftCards.forEach(leftCard => {
    observer.observe(leftCard)
})

//RIGHT CLASS INTERSECTION OBSERVER 
const rightCards = document.querySelectorAll(".right-card");

const rightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

rightCards.forEach(rightCard => {
    observer.observe(rightCard)
})

//TAB LINK FUNCTIONALITY
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}


//GO TO TOP BUTTON FUNCTIONALITY AND DARK MODE STYLES
const sidemenu = document.getElementById("sidemenu");
const goTopBtn = document.querySelector(".go-top-btn")
let toggleBtn = document.querySelector(".toggle-btn");
let btnIcon = document.getElementById("btnIcon");
const softwareDevText = document.querySelector(".software-dev");
const arrowUp = document.querySelector(".fa-arrow-up");

toggleBtn.onclick = function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.classList = "fa-regular fa-moon toggle-btn";
        sidemenu.style.right = "-200px";
        goTopBtn.style.visibility = "visible";
        softwareDevText.style.color = "black";
        arrowUp.style.color = "white";
    } else {
        toggleBtn.classList = "fa-regular fa-sun toggle-btn";
        sidemenu.style.right = "-200px";
        goTopBtn.style.visibility = "visible";
        softwareDevText.style.color = "var(--main-color)";
        arrowUp.style.color = "black";
    }
}

function openmenu() {
    sidemenu.style.right = "0";
    goTopBtn.style.visibility = "hidden"

}

function closemenu() {
    sidemenu.style.right = "-200px";
    goTopBtn.style.visibility = "visible"
}

//CONTACT SUBMISSION FORM HANDLING
const scriptURL = 'https://script.google.com/macros/s/AKfycbzf8vu0unRNB9UFEnE-k0zrMXOLeosHgq-d4ugijMlxLcGn41pu3f9VfEhyz0321OcIUQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

//FOOTER COPYRIGHT TEXT
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();


year.innerHTML = currentYear;