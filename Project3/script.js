let container = document.querySelector(".container");
let body = document.querySelector("body");
body.addEventListener("click", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  let bullet = document.createElement("span");
  bullet.setAttribute("class", "bullet");
  bullet.style.left = x + "px";
  bullet.style.top = y + "px";
  body.appendChild(bullet);
});
