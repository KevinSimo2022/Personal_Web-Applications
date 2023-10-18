// Get references to elements
const homeButton = document.querySelector('.home');
const menuItems = document.querySelectorAll('.mennu li.hidden');
const menuBackground = document.querySelector('.menu-background');

// Add a click event listener to the "Home" button
homeButton.addEventListener('click', () => {
  menuItems.forEach(item => {
    item.classList.toggle('hidden');
  });

  // Toggle the menu background
  menuBackground.classList.toggle('hidden');
});

// Add click event listeners for menu items to hide the menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(item => {
      item.classList.add('hidden');
    });

    menuBackground.classList.add('hidden');
  });
});


