document.addEventListener('DOMContentLoaded', () => {
    // Check if visitor count exists in localStorage
    let visitorCount = localStorage.getItem('visitorCount');

    // If it doesn't exist, initialize it to 0
    if (!visitorCount) {
        visitorCount = 0;
    }

    // Increment the count
    visitorCount++;

    // Store the updated count back in localStorage
    localStorage.setItem('visitorCount', visitorCount);

    // Display the visitor count on the webpage
    const visitorCounterElement = document.getElementById('visitor-counter');
    visitorCounterElement.textContent = visitorCount;

    //alert("Welcome to the coolest website of the 90s!");
    console.log("Thank you for visiting my retro-themed site!");
});

document.addEventListener("DOMContentLoaded", function () {
    const lockedSection = document.getElementById("lockedSection");
    const navButton = document.getElementById("navigateToLockedSection");

    // Set the scroll limit (Y position) where scrolling will lock
    const scrollLimit = document.getElementById("projects").offsetTop + document.getElementById("projects").offsetHeight;

    // Show navigation button and lock scroll beyond scrollLimit
    window.addEventListener("scroll", function () {
        if (window.scrollY >= scrollLimit) {
            document.body.style.overflow = "hidden"; // Lock scroll
            navButton.style.display = "block"; // Show navigation button
        } else {
            document.body.style.overflow = "auto"; // Allow scroll
            navButton.style.display = "none"; // Hide navigation button
        }
    });

    // Navigate to the locked section when the button is clicked
    navButton.addEventListener("click", function () {
        document.body.style.overflow = "auto"; // Re-enable scroll
        lockedSection.style.display = "block"; // Show locked section
        lockedSection.scrollIntoView({ behavior: "smooth" }); // Scroll to section
    });
});

function delinkCSS() {
    const stylesheet = document.getElementById("stylesheet");
    if (stylesheet) {
        stylesheet.remove();
        alert("WELCOME TO UNSTYLIZED HELL");
    };
};

function toggleSpoiler(button) {
    const spoilerContent = button.nextElementSibling;
    if (spoilerContent.style.display === "none") {
        spoilerContent.style.display = "block";
        button.textContent = "Hide Spoiler";
    } else {
        spoilerContent.style.display = "none";
        button.textContent = "Show Spoiler";
    }
}