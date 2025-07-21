// Select elements
const slider = document.querySelector('.img-slider');
const slides = document.querySelectorAll('.slide');

const totalSlides = slides.length;
let index = 0;

// Clone first 3 and last 3 slides for infinite looping
for (let i = 0; i < 3; i++) {
  const firstClone = slides[i].cloneNode(true);
  const lastClone = slides[totalSlides - 1 - i].cloneNode(true);
  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slider.firstChild);
}

// After cloning, update the slides NodeList and set start index
let allSlides = document.querySelectorAll('.slide');
index = 3; // start at first real slide (after clones)

function updateSlider() {
  const slideWidth = allSlides[0].clientWidth;
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
  index++;
  updateSlider();

  // Reset to start when reaching clone end
  if (index === totalSlides + 3) {
    setTimeout(() => {
      slider.style.transition = 'none';
      index = 3;
      slider.style.transform = `translateX(-${allSlides[0].clientWidth * index}px)`;
    }, 500);
  }
}

// Initialize slider position on load
window.addEventListener('load', () => {
  slider.style.transition = 'none';
  slider.style.transform = `translateX(-${allSlides[0].clientWidth * index}px)`;
});

// Auto scroll every 3 seconds
let autoScrollInterval = setInterval(nextSlide, 3000);

// Optional: Pause auto-scroll on hover
const sliderContainer = document.querySelector('#sliderf');
sliderContainer.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
sliderContainer.addEventListener('mouseleave', () => {
  autoScrollInterval = setInterval(nextSlide, 3000);
});
