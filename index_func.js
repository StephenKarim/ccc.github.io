document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector("model-viewer");
  var overlay = document.getElementById("menuOverlay");
  var closeOverlayButton = document.getElementById("closeOverlayButton");
  var menu = document.querySelector(".menu");
  
  // Event listener for the hamburger menu click
  hamburger.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleMenu();
  });

  // Event listener for the close button click
  closeOverlayButton.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleMenu();
  });

  // Event listener for clicks anywhere on the document
  document.addEventListener("click", function(event) {
    var menuRect = menu.getBoundingClientRect();
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Check if the mouse is within the menu element
    if (
      mouseX >= menuRect.left &&
      mouseX <= menuRect.right &&
      mouseY >= menuRect.top &&
      mouseY <= menuRect.bottom
    ) {
      // Mouse is on the menu element, do nothing
    } else {
      // Mouse is not on the menu element, close the overlay if it's open
      if (overlay.style.display === "block") {
        toggleMenu();
      }
    }
  });

  // Function to toggle the menu overlay
  function toggleMenu() {
    if (overlay.style.display === "none") {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  }
});



