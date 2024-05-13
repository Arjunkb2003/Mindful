var res = document.getElementById("resultdata");

function validate() {
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    if (email.length == 0 && password.length == 0) {
        res.innerHTML = "Enter Email and password";
        // Apply styles
        applyStyles(res);
    } else if (email.length == 0) {
        res.innerHTML = "Enter Email";
        // Apply styles
        applyStyles(res);
    } else if (password.length == 0) {
        res.innerHTML = "Enter Password";
        // Apply styles
        applyStyles(res);
    } else if (password.length < 4 || password.length > 10) {
        res.innerHTML = "Password should have 4 to 10 characters";
        // Apply styles
        applyStyles(res);
    } else if (email.length < 6) {
        res.innerHTML = "Enter correct email";
        // Apply styles
        applyStyles(res);
    } else if (!/[A-Z]/.test(password)) {
        res.innerHTML = "Password should contain at least one uppercase";
        // Apply styles
        applyStyles(res);
    } else if (!/[a-z]/.test(password)) {
        res.innerHTML = "Password should contain at least one lowercase";
        // Apply styles
        applyStyles(res);
    } else if (!/[0-9]/.test(password)) {
        res.innerHTML = "Password should contain at least one number";
        // Apply styles
        applyStyles(res);
    } else if (!/[@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/.test(password)) {
        res.innerHTML = "Password should contain at least one special character";
        // Apply styles
        applyStyles(res);
    } else {
        // Redirect to todo.html if all conditions are satisfied
        window.location.href = "todo.html";
    }
}

// Function to apply styles to the result element
function applyStyles(element) {
    element.style.color = "red";
    element.style.fontWeight = "500";
    element.style.fontSize = "14px";
    element.style.paddingLeft = "3.5rem";
}
