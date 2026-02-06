// Highlight active menu item on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
// ================= DYNAMIC ENGINEERING CARDS =================
const engineeringContainer = document.getElementById("engineering-cards");

if (engineeringContainer) {
    fetch("data/engineering.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "offering-card";

                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `;

                engineeringContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error loading engineering data:", error);
        });
}
// ================= DYNAMIC MECHANICAL CARDS =================
const mechanicalContainer = document.getElementById("mechanical-cards");

if (mechanicalContainer) {
    fetch("data/mechanical.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "offering-card";
                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `;
                mechanicalContainer.appendChild(card);
            });
        });
}

// ================= DYNAMIC ELECTRICAL CARDS =================
const electricalContainer = document.getElementById("electrical-cards");

if (electricalContainer) {
    fetch("data/electrical.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "offering-card";
                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `;
                electricalContainer.appendChild(card);
            });
        });
}
// ================= HERO SLIDER WITH TITLES =================

const hero = document.querySelector(".hero");
const heroTitle = document.getElementById("hero-title");

// Slides data (EDIT TITLES FREELY)
const slides = [
  {
    image: "assets/mechanical.jpg",
    title: "Precision Mechanical Engineering Solutions"
  },
  {
    image: "assets/electrical.jpg",
    title: "Reliable Electrical Systems for Industry"
  },
  {
    image: "assets/machine-design.jpg",
    title: "Custom Machine Design & SPM Solutions"
  },
  {
    image: "assets/automation.jpg",
    title: "Automation & BIM Driven Engineering"
  },
  {
    image: "assets/ai.jpg",
    title: "AI Enabled Engineering for Smart Industry"
  }
];


let currentSlide = 0;

function updateHeroSlide() {
    hero.style.backgroundImage = `
        linear-gradient(
            to right,
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.05)
        ),
        url("${heroSlides[currentSlide].image}")
    `;

    heroTitle.textContent = heroSlides[currentSlide].title;
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateHeroSlide();
}, 5000); // 🔥 5 seconds

// Initial load
updateHeroSlide();


// Tab click handling
heroTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        heroTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        currentType = tab.dataset.type;
        currentIndex = 0;
        updateHeroImage();
    });
});

// Init
updateHeroImage();
startSlideshow();
