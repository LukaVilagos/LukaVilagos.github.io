const button = document.getElementById("bars");
const nav = document.getElementById("nav");
const items = document.getElementsByClassName("item");

function toggle() {
  nav.classList.toggle("hidden");
}

function carousel() {
  for (const item of items) {
    item.classList.toggle("hidden");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
