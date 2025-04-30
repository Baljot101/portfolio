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

function toggleMore(clickedBox) {
  // Collapse all other boxes
  document.querySelectorAll(".ser-box").forEach((box) => {
    if (box !== clickedBox) {
      const otherText = box.querySelector(".more-text");
      const otherDots = box.querySelector(".dots");
      const otherLink = box.querySelector(".ser-box-link");
      if (otherText && otherText.style.display === "inline") {
        otherText.style.display = "none";
        if (otherDots) otherDots.style.display = "inline";
        otherLink.innerHTML =
          'Read more <img src="./images/right-arrow.png" alt="" class="w-4 light-mode" /><img src="./images/right-arrow-dark.png" alt="" class="w-4 dark-mode" />';
      }
    }
  });

  // Toggle clicked box
  const moreText = clickedBox.querySelector(".more-text");
  const dots = clickedBox.querySelector(".dots");
  const link = clickedBox.querySelector(".ser-box-link");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    if (dots) dots.style.display = "none";
    link.innerHTML =
      'Read less <img src="./images/right-arrow.png" alt="" class="w-4 light-mode" /><img src="./images/right-arrow-dark.png" alt="" class="w-4 dark-mode" />';
  } else {
    moreText.style.display = "none";
    if (dots) dots.style.display = "inline";
    link.innerHTML =
      'Read more <img src="./images/right-arrow.png" alt="" class="w-4 light-mode" /><img src="./images/right-arrow-dark.png" alt="" class="w-4 dark-mode" />';
  }
}

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
