// TYPEWRITER
const text = "TACTICAL LUXURY HEADWEAR";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// HAMBURGER MENU
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// SCROLL TO SECTION
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// NAV HIDE ON SCROLL
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let current = window.pageYOffset;

  if (current > lastScroll) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = current;
});

// SIGNUP FORM
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const msg = document.getElementById("formMessage");

  msg.textContent = `Welcome ${name}, you're now elite registered.`;

  this.reset();
});
