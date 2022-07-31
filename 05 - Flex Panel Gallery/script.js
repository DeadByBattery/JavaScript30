const panels = document.querySelectorAll(".panel");

function zoomPanel(e) {
  this.classList.toggle("open");
}

function addPara(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", zoomPanel));
panels.forEach((panel) => panel.addEventListener("transitionend", addPara));
