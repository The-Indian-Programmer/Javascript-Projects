let body = document.querySelector("body");
let section = document.querySelector("#section");
window.addEventListener("scroll", () => {
  let y = window.scrollY;
  console.log(y);
  //   section.style.clipPath = `circle(${Math.floor(y)}px at center);`;
  section.style.clipPath = `circle(${Math.floor(y)}px at center)`;
});
