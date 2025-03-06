document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const serviceButtons = document.querySelectorAll(".service-button");
  const serviceDetails = document.querySelectorAll(".service-detail");
  const closeButtons = document.querySelectorAll(".close-detail");

  // Open service detail on hover
  serviceButtons.forEach((button) => {
    button.addEventListener("mouseenter", function (event) {
      event.stopPropagation(); // Prevent immediate closing due to document click listener
      const service = this.getAttribute("data-service");
      const detail = document.getElementById(`${service}-detail`);

      if (detail) {
        serviceDetails.forEach((d) => d.classList.remove("active")); // Close others
        detail.classList.add("active");
        document.body.classList.add("no-scroll"); // Prevent background scrolling
      }
    });
  });

  // Close service detail when clicking on close button
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const detail = this.closest(".service-detail");
      if (detail) {
        detail.classList.remove("active");
        document.body.classList.remove("no-scroll"); // Enables scrolling again
      }
    });
  });

  // Close when clicking anywhere on screen
  document.addEventListener("click", function (event) {
    const isButton = event.target.closest(".service-button");
    const isDetail = event.target.closest(".service-detail");

    if (!isButton && !isDetail) {
      serviceDetails.forEach((detail) => {
        detail.classList.remove("active");
      });
      document.body.classList.remove("no-scroll");
    }
  });

  // Add transition effect for smooth opening and closing
  serviceDetails.forEach((detail) => {
    detail.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  });

  // === Logo Slider ===
  const track = document.querySelector(".logo-track");
  const slides = document.querySelectorAll(".logo-slide");
  let speed = 1; // Adjust speed for faster/slower movement

  if (track && slides.length > 0) {
    let totalWidth = 0;
    slides.forEach((slide) => {
      totalWidth += slide.offsetWidth + 20; // Add margin space
    });

    let position = 0;

    function moveSlider() {
      position -= speed;
      track.style.transform = `translateX(${position}px)`;

      // Reset position to avoid overflow
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      requestAnimationFrame(moveSlider);
    }

    moveSlider();
  }

  // === Water Ripples Effect ===
  $(document).ready(function () {
    $(".ripples-img").ripples({
      resolution: 300,
      dropRadius: 20,
      perturbance: 0.03,
    });
  });
});
