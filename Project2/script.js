document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const sidebar = document.getElementByClass("sidebar-menu");

    // Add a click event listener to the menu button
    menuButton.addEventListener("click", function () {
        // Toggle the sidebar's right position when the menu button is clicked
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-250px"; // Hide the sidebar
        } else {
            sidebar.style.right = "0"; // Show the sidebar
        }
    });

    // Add click event listeners to all links in the sidebar to hide the menu
    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            sidebar.style.right = "-250px"; // Hide the sidebar
        });
    });
});

