const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');
const slider = document.querySelector('.slider__items');
const sliderItems = Array.from(slider.querySelectorAll('.slider__item'));
const slideCount = sliderItems.length;
let slideIndex = 0;


nextButton.onclick = function(){
    slideIndex = (slideIndex + 1) % slideCount;

    updateSlider();
};

prevButton.onclick = function(){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;

    updateSlider();
};

function updateSlider() {
    sliderItems.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.classList.add('slider__item_active');
      } else {
        slide.classList.remove('slider__item_active');
      }
    });
  }