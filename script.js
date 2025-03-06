document.addEventListener('DOMContentLoaded', function() {
  // Service buttons functionality
  const serviceButtons = document.querySelectorAll('.service-button');
  const serviceDetails = document.querySelectorAll('.service-detail');
  const closeButtons = document.querySelectorAll('.close-detail');

  // Open service detail when clicking on a service button
  serviceButtons.forEach(button => {
      button.addEventListener('click', function() {
          const service = this.getAttribute('data-service');
          const detail = document.getElementById(`${service}-detail`);
          detail.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent scrolling when overlay is open
      });
  });

  // Close service detail when clicking on the close button
  closeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const detail = this.closest('.service-detail');
          detail.classList.remove('active');
          document.body.style.overflow = ''; // Re-enable scrolling
      });
  });

  // Close service detail when clicking outside the content
  serviceDetails.forEach(detail => {
      detail.addEventListener('click', function(e) {
          if (e.target === this) {
              this.classList.remove('active');
              document.body.style.overflow = ''; // Re-enable scrolling
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const serviceButtons = document.querySelectorAll(".service-button");
  const serviceDetails = document.querySelectorAll(".service-detail");
  const closeButtons = document.querySelectorAll(".close-detail");

  // Open service detail
  serviceButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent immediate closing due to document click listener
      const service = this.getAttribute("data-service");
      const detail = document.getElementById(`${service}-detail`);

      if (detail) {
        detail.classList.add("active");
        document.body.classList.add("no-scroll"); // Prevents background scrolling
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

  // Close when clicking outside the content (anywhere on screen)
//   document.addEventListener("click", function (event) {
//     serviceDetails.forEach((detail) => {
//       if (
//         detail.classList.contains("active") &&
//         !detail.contains(event.target)
//       ) {
//         detail.classList.remove("active");
//         document.body.classList.remove("no-scroll"); // Enables scrolling again
//       }
//     });
//   });

document.addEventListener('click', function (event) {
    serviceDetails.forEach(detail => {
      if (
        detail.classList.contains('active') &&  // Check if the detail is open
        detail.contains(event.target) &&        // Check if the click is inside the detail
        event.target.tagName !== 'a'            // Ensure the click is NOT on a link
      ) {
        detail.classList.remove('active'); // Hides the section
        document.body.classList.remove('no-scroll'); // Enables scrolling again
      }
    });
  });
  

  // logo slider
  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".logo-track");
    const slides = document.querySelectorAll(".logo-slide");
    let speed = 1; // Adjust speed for faster/slower movement

    if (track && slides.length > 0) {
      let totalWidth = 0;

      slides.forEach((slide) => {
        totalWidth += slide.offsetWidth + 20; // Add margin space
      });

      // Duplicate slides for infinite effect
      // track.innerHTML += track.innerHTML;

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
  });

  // Water Ripples function
  $(document).ready(function () {
    $(".ripples-img").ripples({
      resolution: 300,
      dropRadius: 20,
      perturbance: 0.03,
    });
  });
});
