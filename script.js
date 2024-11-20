// script.js
const hamburger = document.getElementById("hamburger"); // Hamburger icon
const menu = document.getElementById("menu"); // Overlay container
const closeBtn = document.getElementById("close-btn"); // Close button

// Open the mobile menu when hamburger is clicked
hamburger.addEventListener("click", () => {
    menu.classList.add("active"); // Show the mobile menu
    closeBtn.classList.add("active"); // Show the mobile menu
    
});

// Close the mobile menu when close button is clicked
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active"); // Hide the mobile overlay menu
});
