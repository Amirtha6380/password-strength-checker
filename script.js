function checkPassword() {

    var password = document.getElementById("password").value;

    var length = password.length;
    var hasLower = false;
    var hasUpper = false;
    var hasDigit = false;
    var hasSpecial = false;

    for (var i = 0; i < length; i++) {

        var ch = password[i];

        if (ch >= 'a' && ch <= 'z')
            hasLower = true;

        else if (ch >= 'A' && ch <= 'Z')
            hasUpper = true;

        else if (ch >= '0' && ch <= '9')
            hasDigit = true;

        else
            hasSpecial = true;
    }

    var strength = 0;
    var suggestions = [];

    if (length >= 8)
        strength++;
    else
        suggestions.push("Add at least 8 characters");

    if (hasLower)
        strength++;
    else
        suggestions.push("Add lowercase letter");

    if (hasUpper)
        strength++;
    else
        suggestions.push("Add uppercase letter");

    if (hasDigit)
        strength++;
    else
        suggestions.push("Add a number");

    if (hasSpecial)
        strength++;
    else
        suggestions.push("Add special symbol (!@#$ etc)");

    var result = document.getElementById("result");
    var fill = document.getElementById("strength-fill");
    var suggestionBox = document.getElementById("suggestions");

    suggestionBox.innerHTML = "";

    if (strength <= 2) {
        result.innerHTML = "Weak Password";
        fill.style.width = "33%";
        fill.style.background = "red";
    }
    else if (strength == 3 || strength == 4) {
        result.innerHTML = "Medium Password";
        fill.style.width = "66%";
        fill.style.background = "orange";
    }
    else {
        result.innerHTML = "Strong Password";
        fill.style.width = "100%";
        fill.style.background = "green";
    }

    for (var i = 0; i < suggestions.length; i++) {
        var li = document.createElement("li");
        li.textContent = "⚠ " + suggestions[i];
        suggestionBox.appendChild(li);
    }
}