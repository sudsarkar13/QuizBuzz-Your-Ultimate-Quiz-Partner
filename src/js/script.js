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

// Error, Login & Signup validation

// function seterror(id, error) {
//     element = document.getElementById(id);
//     element.getElementsByClassName('validation')[0].innerHTML = error;
// }

// function validateForm() {
//     var returnval = true;

//     // Name
//     var name = document.forms['SignUp']['name'].value;
//     if (name.length < 6) {
//         seterror('name', 'Name must be at least 6 characters.');
//         returnval = false;
//     }
// }

// Functions for validation


// Shubham Tiwari edits for validation

const formSignUp = document.getElementById('sign-up');
const inputBox = formSignUp.querySelectorAll('.input-box');

formSignUp.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(formSignUp);
    console.log(inputBox);

    const inputName = inputBox[0].querySelector('#name').value;
    const inputEmail = inputBox[1].querySelector('#email').value;
    const inputPhone = inputBox[2].querySelector('#phone').value;
    const inputPassword = inputBox[3].querySelector('#password').value;
    const inputConfirmPassword = inputBox[4].querySelector('#cnfpassword').value;

    console.log(inputName, inputPhone, inputPassword, inputConfirmPassword);

    if (inputName.length < 6)
        console.log("Name is too short")

    if (!validateEmail(inputEmail))
        console.log("Invalid Email");

    if (!validatePhone(inputPhone))
        console.log("Invalid Phone");

    if (inputConfirmPassword != inputPassword) {
        console.log("password does'nt match");
    }
})

// This will validate your email 
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(email) {
    return emailRegex.test(email);
}


const phoneRegex = /^[6-9]\d{9}$/;

function validatePhone(phone) {
    return phoneRegex.test(phone);
}



// footer year
VarDate = new Date();
VarYear = VarDate.getFullYear();
document.getElementById("footer").innerHTML = VarYear;

// footer time
// function showTime() {
//     const now = new Date();
//     const days = now.getDay();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     const timeString = `${days}days ${hours}hours ${minutes}mins ${seconds}secs`;

//     document.getElementById("f-time").innerHTML = timeString;
// }

// setInterval(showTime, 1000);

function showTime() {
    const now = new Date();
    const startDate = new Date("2021-08-01");
    const days = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    document.getElementById("f-time").innerHTML = timeString;
}

setInterval(showTime, 1000);

