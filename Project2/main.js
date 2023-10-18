// Get a reference to the "Home" button and sections to toggle
const homeButton = document.querySelector('.home');
const sectionsToToggle = document.querySelectorAll('.hidden');
const menuBackground = document.querySelector('.menu-background');

// Add a click event listener to the "Home" button
homeButton.addEventListener('click', () => {
  // Loop through the sections to toggle and toggle the "hidden" class
  sectionsToToggle.forEach(section => {
    section.classList.toggle('hidden');
  });

  // Toggle the menu background
  menuBackground.classList.toggle('hidden');
});

