function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeBtn = document.getElementById("theme-btn");
const themeBtnMobile = document.getElementById("theme-btn-mobile");

function updateIcons() {
  const linkedin = document.querySelectorAll(".linkedin-icon");
  const github = document.querySelectorAll(".github-icon");

  if (document.body.classList.contains("dark")) {
    linkedin.forEach((el) => (el.src = "./assets/linkedin-dark.png"));
    github.forEach((el) => (el.src = "./assets/github-dark.png"));
  } else {
    linkedin.forEach((el) => (el.src = "./assets/linkedin.png"));
    github.forEach((el) => (el.src = "./assets/github.png"));
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    if (themeBtn) themeBtn.textContent = "☀️";
    if (themeBtnMobile) themeBtnMobile.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    if (themeBtn) themeBtn.textContent = "🌙";
    if (themeBtnMobile) themeBtnMobile.textContent = "🌙";
  }

  updateIcons();
}

if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
if (themeBtnMobile) themeBtnMobile.addEventListener("click", toggleTheme);

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) themeBtn.textContent = "☀️";
    if (themeBtnMobile) themeBtnMobile.textContent = "☀️";
  }
  updateIcons();
});
