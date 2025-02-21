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
    navBar.classList.add("navbar");
    //   navBar.classList.add(
    //     "bg-white",
    //     "bg-opacity-50",
    //     "backdrop-blur-lg",
    //     "shadow-sm",
    //     "dark:bg-darkTheme",
    //     "dark:shadow-white/20"
    //   );
    //   navBar.classList.remove(
    //     "bg-white",
    //     "shadow-sm",
    //     "bg-opacity-50",
    //     "dark:border",
    //     "dark:border-white/50",
    //     "dark:bg-transparent"
    //   );
    // } else {
    //   navBar.classList.remove(
    //     "bg-white",
    //     "bg-opacity-50",
    //     "backdrop-blur-lg",
    //     "shadow-sm",
    //     "dark:bg-darkTheme",
    //     "dark:shadow-white/20"
    //   );
    //   navBar.classList.add(
    //     "bg-white",
    //     "shadow-sm",
    //     "bg-opacity-50",
    //     "dark:border",
    //     "dark:border-white/50",
    //     "dark:bg-transparent"
    //   );
  } else {
    navBar.classList.remove("navbar");
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

// document.documentElement.classList.toggle(
//   "dark",
//   localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
// );

// function toggleTheme() {
//   document.documentElement.classList.toggle("dark");

//   if (document.documentElement.classList.contains("dark")) {
//     localStorage.theme = "dark";
//   } else {
//     localStorage.theme = "light";
//   }
// }

// // Select moon and sun icons
// const moonIcon = document.getElementById("moonIcon");
// const sunIcon = document.getElementById("sunIcon");

// // Apply stored theme preference or system preference
// const isDarkMode =
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches);

// document.documentElement.classList.toggle("dark", isDarkMode);

// // Ensure correct icon is displayed on page load
// if (isDarkMode) {
//   moonIcon.classList.add("hidden");
//   sunIcon.classList.remove("hidden");
// } else {
//   moonIcon.classList.remove("hidden");
//   sunIcon.classList.add("hidden");
// }

// function toggleTheme() {
//   document.documentElement.classList.toggle("dark");

//   const isDark = document.documentElement.classList.contains("dark");

//   // Save preference in localStorage
//   localStorage.theme = isDark ? "dark" : "light";

//   // Toggle moon/sun icons
//   moonIcon.classList.toggle("hidden", isDark);
//   sunIcon.classList.toggle("hidden", !isDark);
// }
