document.querySelector("form").addEventListener("submit", function(event) {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    let errorMessage = document.getElementById("password-error");
    
    if (password.value !== confirmPassword.value) {
        errorMessage.textContent = "Passwords do not match.";
        password.value = "";
        confirmPassword.value = "";
        password.focus();
        event.preventDefault();
    } else {
        errorMessage.textContent = "";
    }
});
