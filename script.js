const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "Play Music";
  }
});

function goNext() {
  window.location.href = "page2.html";
}
