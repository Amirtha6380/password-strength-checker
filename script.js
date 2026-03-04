function checkPassword() {
    var password = document.getElementById("password").value;
    var strength = document.getElementById("result");

    var hasUpper = /[A-Z]/.test(password);
    var hasLower = /[a-z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    var hasSpecial = /[!@#$%^&*]/.test(password);

    if (password.length < 6) {
        strength.innerHTML = "Weak Password";
        strength.style.color = "red";
    }
    else if (hasUpper && hasLower && hasNumber && hasSpecial) {
        strength.innerHTML = "Strong Password";
        strength.style.color = "green";
    }
    else {
        strength.innerHTML = "Medium Password";
        strength.style.color = "orange";
    }
}