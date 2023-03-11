const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1) {
    navbar.classList.replace("bg-transparant", "nav-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparant");
  }
});
