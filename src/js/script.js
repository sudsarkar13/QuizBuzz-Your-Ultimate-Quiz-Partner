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
document.getElementById("SignIn")

// footer year
VarDate = new Date();
VarYear = VarDate.getFullYear();
document.getElementById("footer").innerHTML = VarYear;
