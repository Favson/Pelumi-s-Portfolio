document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navContainer = document.querySelector(".nav-container");
  const navLinks = document.querySelectorAll('.nav-container nav a[href^="#"]'); // Select links inside the toggled menu

  // Toggle the navigation menu
  if (menuToggle && navContainer) {
    menuToggle.addEventListener("click", () => {
      navContainer.classList.toggle("active");
    });
  }

  // Smooth scrolling for navigation links
  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default jump behavior

      const targetId = this.getAttribute("href").substring(1); // Get the section ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Close the menu if it's open (important for mobile UX)
        if (navContainer.classList.contains("active")) {
          navContainer.classList.remove("active");
        }

        window.scrollTo({
          top:
            targetElement.offsetTop -
            document.querySelector("header").offsetHeight, // Account for fixed header
          behavior: "smooth", // Smooth scroll effect
        });
      }
    });
  });

  // Handle "Book a session" buttons
  document.querySelectorAll(".book-session-btn").forEach((button) => {
    button.addEventListener("click", () => {
      // Close the menu if it's open
      if (navContainer.classList.contains("active")) {
        navContainer.classList.remove("active");
      }
      // You can replace this with a more sophisticated modal or form
      alert(
        "Book a session button clicked! You can implement your booking functionality here."
      );
      // Example: window.location.href = 'your-booking-page.html';
    });
  });
});

// JavaScript to update carousel page info
document.addEventListener("DOMContentLoaded", function () {
  const carousels = [
    { id: "trelloCarousel", pageInfoId: "trelloPageInfo", totalItems: 2 },
    { id: "mondayCarousel", pageInfoId: "mondayPageInfo", totalItems: 2 },
  ];

  carousels.forEach((carouselData) => {
     const carouselElement = document.getElementById(carouselData.id);
        if (carouselElement) {
            carouselElement.addEventListener("slide.bs.carousel", function (event) {
                const activeIndex = event.to;
                const pageInfoSpan = document.getElementById(carouselData.pageInfoId);
                if (pageInfoSpan) {
                    pageInfoSpan.textContent = `${activeIndex + 1} of ${
                        carouselData.totalItems
                    }`;
                }
            }); 
        }
    });
});
