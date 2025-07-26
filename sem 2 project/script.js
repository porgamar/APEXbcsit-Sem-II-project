



// Slider for Home page

const sliderContainer = document.querySelector('#sliderf');
let slides = sliderContainer.querySelectorAll('.img-slider');
const totalSlides = slides.length;
let index = 0;

// Clone first 3 and last 3 slides for infinite looping
for (let i = 0; i < 3; i++) {
  const firstClone = slides[i].cloneNode(true);
  const lastClone = slides[totalSlides - 1 - i].cloneNode(true);
  sliderContainer.appendChild(firstClone);
  sliderContainer.insertBefore(lastClone, sliderContainer.firstChild);
}

// Update slides list after cloning
slides = sliderContainer.querySelectorAll('.img-slider');
index = 3; // Start at first real slide (after clones)

function updateSlider(transition = true) {
  const slideWidth = slides[0].clientWidth;
  if (transition) {
    sliderContainer.style.transition = 'transform 0.5s ease';
  } else {
    sliderContainer.style.transition = 'none';
  }
  sliderContainer.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
  index++;
  updateSlider();

  if (index === totalSlides + 3) {
    setTimeout(() => {
      index = 3;
      updateSlider(false);
    }, 500);
  }
}

// Initialize slider position when page loads
window.addEventListener('load', () => {
  updateSlider(false);
});

// Auto scroll every 3 seconds
let autoScrollInterval = setInterval(nextSlide, 3000);

// Pause auto-scroll on hover over container
sliderContainer.parentElement.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
sliderContainer.parentElement.addEventListener('mouseleave', () => {
  autoScrollInterval = setInterval(nextSlide, 3000);
});
