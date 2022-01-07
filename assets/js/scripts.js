/*back-top-top*/
let backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunctionButton);

function scrollFunctionButton() {
    if (window.pageYOffset > 200) {
        setTimeout(function () {
            backToTopButton.style.display = "flex";
         }, 1000);
    }
    else { 
        setTimeout(function () {
         backToTopButton.style.display = "none";
      }, 1000);
        
    }
}

/*jQuery para atualizar a home ao enviar o formulário*/
$(function() {
    $('.form-grid').bind('submit', function(){ 
        setTimeout(function () {
            window.location.reload(1);
        }, 5000);
    });
});


/**slide */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/**var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} */