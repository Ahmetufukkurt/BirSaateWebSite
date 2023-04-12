//* close notification bar
const closebtn = document.querySelector(".notification img");
const notification = document.querySelector(".notification");
closebtn.addEventListener("click", () => {
  notification.style.display = "none";
});

//* slider photo in body
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navigation")[0];
const newLinks = document.getElementsByClassName("responsive")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  newLinks.classList.toggle("active");
});
