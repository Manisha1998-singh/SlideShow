let slides = document.getElementsByClassName("mySlides");
let slideIndex = 1;

showslide(slideIndex);
function plusSlides(n) {
  showslide((slideIndex += n));
}

function plusSlidesbbb(n) {
  showslide((slideIndex -= n));
}
function showslide(n) {
  if (n > slides.length) {
    {
      slideIndex = 1;
    }
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
