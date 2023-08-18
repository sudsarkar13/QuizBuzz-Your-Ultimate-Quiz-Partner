// Logreg scroll

const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

// Login & Signup validation

// Import the jQuery library
const $ = require('jquery');

// Validate the login form
$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        var email = $("#email").val();
        var password = $("#password").val();

        if (email == "" || password == "") {
            alert("Please enter your email and password.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });
});

// Validate the signup form
$(document).ready(function() {
    $("#signupForm").submit(function(event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var phonenumber = $("#phonenumber").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();

        if (name == "" || email == "" || phonenumber == "" || password == "" || confirmPassword == "") {
            alert("Please enter all of the required fields.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        } else if (password != confirmPassword) {
            alert("Your passwords do not match.");
            event.preventDefault();
        } else if (password.length < 8) {
            alert("Your password must be at least 8 characters long.");
            event.preventDefault();
        }
    });
});

// Validate email address
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


// footer year
VarDate = new Date();
VarYear = VarDate.getFullYear();
document.getElementById("footer").innerHTML = VarYear;