let main_video = document.getElementById("main_video");
let tabvideos = document.querySelectorAll(".videotab");
for (let i = 0; i < tabvideos.length; i++) {
  tabvideos[i].addEventListener("click", () => {
    main_video.setAttribute("src", tabvideos[i].src);
    main_video.play();
  });
}
