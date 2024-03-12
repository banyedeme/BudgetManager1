document.addEventListener('DOMContentLoaded', function () {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");

    if (signupBtn && loginBtn && loginForm && signupLink && loginText) {
        signupBtn.onclick = () => {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        };

        loginBtn.onclick = () => {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        };

        signupLink.onclick = () => {
            signupBtn.click();
            return false;
        };
    } else {
        console.error("One or more elements not found. Check your HTML structure.");
    }
});

/*
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
/*function myfunction(){
  var x = document.getElementById("pass");

  if(x.type === "password"){
     x.type = "text";
  }
  else{
      x.type = "password";
  }
}
*/

// Define a function for login validation and redirection
function validateLogin() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("pass").value;

    if (email !== "" && password.length >= 8) {
        alert("Login successful");
        // Redirect to another page after successful login
        window.location.replace("Dashboard.html");
        return false;
    } else {
        alert("Login failed. Please enter a valid email and password.");
        return false;
    }
}

// Define a function for signup validation and redirection
function validateSignup() {
    var firstName = document.getElementById("firstname").value.trim();
    var lastName = document.getElementById("Surname").value.trim();
    var email = document.getElementById("emailSignup").value.trim();
    var password = document.getElementById("passSignup").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (firstName !== "" && lastName !== "" && email !== "" && password.length >= 8 && password === confirmPassword) {
        alert("Signup successful");
        // Redirect to another page after successful signup
        window.location.replace("login.html");
        return false;
    } else {
        alert("Signup failed. Please ensure all fields are filled correctly and passwords match.");
        return false;
    }
}

