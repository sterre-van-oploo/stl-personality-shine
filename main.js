document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loadingScreen = document.getElementById("loading-screen");
        var mainContent = document.getElementById("main-content");

        // Hide the loading screen
        loadingScreen.style.opacity = 0;

        // After a short delay, hide the loading screen completely and show the main content
        setTimeout(function() {
            loadingScreen.style.display = "none";
            mainContent.style.display = "block";
        }, 200); // Adjust the delay based on your needs
    }, 5000); // Adjust the timeout value based on the duration of your loading video or GIF
});
