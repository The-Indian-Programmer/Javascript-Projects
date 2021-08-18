let header = document.getElementById("header");
let toggleButton = document.getElementById("togglebutton");
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "#fff";
    header.style.color = "#000";
  } else {
    header.style.backgroundColor = "";
    header.style.color = "#fff";
  }
});

toggleButton.addEventListener("click", () => {
  header.classList.toggle("toggle");
});
