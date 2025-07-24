// Slider for Home page

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



//contact page form validation
  
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length <= 5) {
      alert('Name must be more than 5 characters.');
      return;
    }

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (message.length === 0) {
      alert('Please enter a message.');
      return;
    }

    alert('Form submitted successfully!');
    this.submit();
  });
});

