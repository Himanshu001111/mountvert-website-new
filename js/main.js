const hero = document.querySelector(".hero");
const heroTitle = document.getElementById("hero-title");

const heroSlides = [
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

function updateHero() {
  hero.style.backgroundImage = `
    linear-gradient(
      to right,
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.25),
      rgba(0,0,0,0)
    ),
    url("${heroSlides[currentSlide].image}")
  `;
  heroTitle.textContent = heroSlides[currentSlide].title;
}

updateHero();

setInterval(() => {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  updateHero();
}, 5000);
