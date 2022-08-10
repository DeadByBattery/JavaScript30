const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progress_bar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skip_buttons = player.querySelectorAll("[data-skip]");
const fullscreen = player.querySelector(".fullscreen");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method](); // another way to access methods by using brackets like accessing properties
}

function updateIcon() {
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}

function skipVideo() {
  video.currentTime += parseInt(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (this.currentTime / this.duration) * 100;
  progress_bar.style.flexBasis = `${ percent }%`;
}

function scrub(e) {
  const scrub_time = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrub_time;
}

function fullscreenToggle() {
  // video.classList.toggle("fullscreen--toggle");
  video.webkitRequestFullscreen();
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skip_buttons.forEach((skip_button) => skip_button.addEventListener("click", skipVideo));

ranges.forEach((range) => range.addEventListener("input", handleRange));

progress.addEventListener("click", scrub);

let is_mousedown = false;
progress.addEventListener("mousemove", (e) => is_mousedown && scrub(e));
progress.addEventListener("mousedown", () => is_mousedown = true);
progress.addEventListener("mouseup", () => is_mousedown = false);

fullscreen.addEventListener("click", fullscreenToggle);