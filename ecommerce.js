let slideIndex = 0;
const slides = document.querySelectorAll(".slider img");

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  const slider = document.querySelector(".slider");
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Auto slide
setInterval(() => {
  nextSlide();
}, 3000); // Change slide every 3 seconds

// Initial slide
showSlide(slideIndex);
// image slider complete

function filterProducts() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase(); // Get the search input and convert it to lowercase
  const products = document.querySelectorAll(".product"); // Select all product elements
  const hidecontent = document.getElementById("sliders");
  const foundMessage = document.getElementById("foundMessage");
  let anyVisible = false;

  if (hidecontent != "") {
    hidecontent.style.display = "none";
  }

  products.forEach((product) => {
    const category = product.getAttribute("data-category"); // Get the category of each product
    if (category.toLowerCase().includes(searchInput)) {
      product.style.display = "block"; // Show product if category matches search input
    } else {
      product.style.display = "none"; // Hide product if category doesn't match
    }
  });

  if (!anyVisible && searchInput) {
    foundMessage.style.diplay = "block";
  } else {
    foundMessage.style.display = "none";
  }
}

// if (category.toLowerCase().includes(searchInput)) {
//   indimation.innerHTML = "";
// } else {
//   indimation.innerHTML = "not reachable";
// }
