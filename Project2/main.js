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

async function fetchDribbbleShots() {
  const dribbbleUsername = 'kevinn0'; // Replace with your Dribbble username
  const accessToken = 'your_dribbble_access_token'; // Replace with your Dribbble access token

  try {
      const response = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`);
      const shots = await response.json();

      const dribbbleContainer = document.getElementById('dribbble-shots');
      shots.forEach(shot => {
          const shotElement = document.createElement('div');
          shotElement.className = 'shot';
          shotElement.innerHTML = `
              <a href="${shot.html_url}" target="_blank">
                  <img src="${shot.images.normal}" alt="${shot.title}">
              </a>
              <p>${shot.title}</p>
          `;
          dribbbleContainer.appendChild(shotElement);
      });
  } catch (error) {
      console.error('Error fetching Dribbble shots:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchDribbbleShots);

