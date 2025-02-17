// Scroll down
const scrollDown = document.querySelector(".scroll-down"),
  navLists = document.querySelector(".nav__lists"),
  menuBtn = document.querySelector("#menu-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    scrollDown.classList.add("hide");
  } else {
    scrollDown.classList.remove("hide");
  }
});

// Nav menu toggle

let menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLists.classList.toggle("open-menu");

  if (menuIcon.classList.contains("ri-menu-line")) {
    menuIcon.classList.remove("ri-menu-line");
    menuIcon.classList.add("ri-close-line");
  } else {
    menuIcon.classList.add("ri-menu-line");
    menuIcon.classList.remove("ri-close-line");
  }

  navLists.addEventListener("click", () => {
    navLists.classList.remove("open-menu");
    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-line");
  });
});

// Dark mode
const darkModeBtn = document.getElementById("toggle-mode");
const lightModeImgs = document.querySelectorAll(".light-mode");
const darkModeImgs = document.querySelectorAll(".dark-mode");

const updateDarkMode = () => {
  const isDark = localStorage.getItem("darkMode") === "true";

  if (isDark) {
    document.body.classList.add("dark");
    darkModeBtn.classList.add("ri-moon-fill");
    darkModeBtn.classList.remove("ri-sun-fill");
    lightModeImgs.forEach((img) => (img.style.display = "block"));
    darkModeImgs.forEach((img) => (img.style.display = "none"));
  } else {
    document.body.classList.remove("dark");
    darkModeBtn.classList.add("ri-sun-fill");
    darkModeBtn.classList.remove("ri-moon-fill");
    lightModeImgs.forEach((img) => (img.style.display = "none"));
    darkModeImgs.forEach((img) => (img.style.display = "block"));
  }
};

darkModeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  localStorage.setItem("darkMode", isDark.toString());

  if (isDark) {
    darkModeBtn.classList.remove("ri-sun-fill");
    darkModeBtn.classList.add("ri-moon-fill");
    lightModeImgs.forEach((img) => (img.style.display = "block"));
    darkModeImgs.forEach((img) => (img.style.display = "none"));
  } else {
    darkModeBtn.classList.remove("ri-moon-fill");
    darkModeBtn.classList.add("ri-sun-fill");
    lightModeImgs.forEach((img) => (img.style.display = "none"));
    darkModeImgs.forEach((img) => (img.style.display = "block"));
  }
});

// Initialize dark mode on page load
updateDarkMode();

// Change active nav
const navLinks = document.querySelectorAll(".nav__lists li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => link.removeAttribute("id"));
    link.setAttribute("id", "active");
  });
});

// year dynamically 
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// scroll smooth using js

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement?.offsetTop - 100;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
