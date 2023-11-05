const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");

passwordField.addEventListener("keyup",  (e) => {
    checkPasswords(passwordField.value, confirmPasswordField.value)
});

confirmPasswordField.addEventListener("keyup",  (e) => {
    checkPasswords(passwordField.value, confirmPasswordField.value)
});

function checkPasswords(password, confirmPassword) {
    if(password == confirmPassword)
    {
        document.getElementById("error").innerText = "";
    }
    else
    {
        document.getElementById("error").innerText = "*The password does not match!";
    }
}
