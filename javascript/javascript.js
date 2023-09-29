// Select all images within the slider
const images = document.querySelectorAll('#slider img');

// Select previous and next buttons
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");

// Initialize the current index
let currentIndex = 0;

// Function to reset image classes
function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}

// Function to initialize the slider
function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
}

// Function to slide left
function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}

// Function to slide right
function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}

// Initialize the slider
initializeSlider();

// Add click event listeners for previous and next buttons
previousImage.addEventListener('click', function() {
  slideLeft();
});

nextImage.addEventListener('click', function() {
  slideRight();
});

// Select all items that are not the first child
const items = document.querySelectorAll('.item:not(:first-child)');

// Options for the Intersection Observer
const options = {
  threshold: 0.5
}

// Function to add the "slide-in" effect when elements are in view
function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

// Create an Intersection Observer with the given options
const observer = new IntersectionObserver(addSlideIn, options)

// Observe each item in the list
items.forEach(item => {
  observer.observe(item);
});
