// Validate login credentials
function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginError = document.getElementById("loginError");

  // Validate username and password
  if (username === "admin" && password === "admin") {
    // Hide the login page and show the main content
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    // Show error message
    loginError.textContent = "Invalid username or password!";
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
