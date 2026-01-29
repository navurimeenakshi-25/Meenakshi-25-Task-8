function ValidateLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("error-message");
    const popup = document.getElementById("popup");

    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
        msg.textContent = "";

        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 2000);

        return false; // frontend demo
    } else {
        msg.textContent = "Invalid username or password!";
        msg.style.color = "red";
        return false;
    }
}
function clearErrorMessage() {
    document.getElementById("error-message").textContent = "";
}
function checkRegistrationSuccess() {
    const justRegistered = localStorage.getItem("justRegistered");
    if (justRegistered === "true") {
        const msg = document.getElementById("error-message");
        msg.textContent = "Registration successful! Please log in.";
        msg.style.color = "green";
        localStorage.removeItem("justRegistered");
    }
}