document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const slider = document.querySelector(".cards");
    const slides = document.querySelectorAll(".card-image");
    
    let slideIndex = 0;
    const totalSlides = slides.length;
  
    // Function to show current slide
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      slides[index].style.display = "block";
    }
  
    // Show the initial slide
    showSlide(slideIndex);
  
    // Next slide functionality
    nextButton.addEventListener("click", function() {
      slideIndex++;
      if (slideIndex >= totalSlides) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    });
  
    // Previous slide functionality
    prevButton.addEventListener("click", function() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
      }
      showSlide(slideIndex);
    });
  });
  