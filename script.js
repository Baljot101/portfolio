const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

// --------------- light mode and dark mode --------------------

// Apply dark mode based on localStorage or system preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
}

// Function to toggle dark mode
function toggleTheme() {
  document.documentElement.classList.toggle("dark");

  // Save the user's preference in localStorage
  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}
