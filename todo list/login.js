var res = document.getElementById("resultdata");

function validate() {
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    if (email.length == 0 && password.length == 0) {
        res.innerHTML = "Enter Email and password";
        applyStyles(res);
        res.style.paddingLeft = "3.5rem";
    } else if (email.length == 0) {
        res.innerHTML = "Enter Email";
        res.style.paddingLeft = "5rem";
        applyStyles(res);
    } else if (password.length == 0) {
        res.innerHTML = "Enter Password";
        res.style.paddingLeft = "5rem";
        applyStyles(res);
    } else if (password.length < 4 || password.length > 10) {
        res.innerHTML = "Password should have 4 to 10 characters";
        applyStyles(res);
    } else if (email.length < 6) {
        res.innerHTML = "Enter correct email";
        applyStyles(res);
    } else if (!/[A-Z]/.test(password)) {
        res.innerHTML = "Password should contain at least one uppercase";
        applyStyles(res);
    } else if (!/[a-z]/.test(password)) {
        res.innerHTML = "Password should contain at least one lowercase";
        applyStyles(res);
    } else if (!/[0-9]/.test(password)) {
        res.innerHTML = "Password should contain at least one number";
        applyStyles(res);
    } else if (!/[@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/.test(password)) {
        res.innerHTML = "Password should contain at least one special character";
        applyStyles(res);
    } else {
        window.location.href = "todo.html";
    }
}

function applyStyles(element) {
    element.style.color = "red";
    element.style.fontWeight = "500";
    element.style.fontSize = "14px";
    element.style.marginLeft= "-13px"
    
}
