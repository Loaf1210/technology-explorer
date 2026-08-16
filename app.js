
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
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

    // Username length check (and does not contain symbols)
    if (username.length < 6 || username.length > 20) {
        alert("Username must be between 6 and 20 characters.");
        return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        alert("Username can only contain letters and numbers.");
        return;
    }

    // Checkbox check
    if (!checkbox) {
        alert("You must agree to the Terms of Service.");
        return;
    }

    alert("Successfully registered!");

    // Redirect to another page
    window.location.href = "Login/index.html";
});