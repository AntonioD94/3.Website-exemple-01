document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const main = document.querySelector("main"); // Select the main element
  
    // Function to toggle between light and dark modes
    function toggleDarkMode() {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        main.classList.remove("dark-mode"); // Remove the dark mode class from main
        localStorage.setItem("theme", "light-mode");
        toggleButton.textContent = "Enable Dark Mode";
      } else {
        body.classList.add("dark-mode");
        main.classList.add("dark-mode"); // Add the dark mode class to main
        localStorage.setItem("theme", "dark-mode");
        toggleButton.textContent = "Enable Light Mode";
      }
    }
  
    // Check for a user's saved theme preference
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      body.classList.add(currentTheme);
      main.classList.add(currentTheme); // Apply the saved theme to main
      if (currentTheme === "dark-mode") {
        toggleButton.textContent = "Enable Light Mode";
      }
    }
  
    // Toggle dark mode when the button is clicked
    toggleButton.addEventListener("click", toggleDarkMode);
  });
  