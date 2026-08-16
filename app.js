
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("inputEmail4").value.trim();
    const password = document.getElementById("inputPassword4").value.trim();
    const checkbox = document.getElementById("gridCheck").checked;

    // Simple email check (must contain @)
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password length check
    if (password.length < 6 || password.length > 18) {
        alert("Password must be between 6 and 18 characters.");
        return;
    }

    // Checkbox check
    if (!checkbox) {
        alert("You must agree to the Terms of Service.");
        return;
    }

    alert("Login successful!");
    
    // Redirect to another page
    window.location.href = "/Main/index.html";
});