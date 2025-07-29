var userName;
var birthDay;
var phoneNumber;
var email;
var password;
var logInUrl;
var confirmPassword;
var passwordHint;
function validateUserBirthDay() {
    const day = parseInt(document.getElementsByClassName("birthDay").value);
    const year = parseInt(document.getElementsByClassName("birthYear").value);
    if ((0 >= day || day > 31) || (year < 1900 || year > 2026) || (isNaN(day) || isNaN(year))) {
        alert("Enter valide birthday");
        return false;
    }
}

function checkPassword() {
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;
    if (password == confirmPassword) {
        return true;
    }
    alert("Passwords do not match");
    return false;
}

const encryptMap = {};
const decryptMap = {};

function biMap() {
    let plainText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+-=';
    let reversedText = '=-+_)(*&^%$#@!~0987654321ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba';

    for (let i = 0; i < plainText.length; i++) {
        encryptMap[plainText[i]] = reversedText[i];
        decryptMap[reversedText[i]] = plainText[i];
    }
}
function encrypt() {
    let password = document.getElementById('password').value;
    let encryptText = '';

    for (let i = 0; i < password.length; i++) {
        let input = password[i];
        encryptText += encryptMap[input] || input;
    }

    document.getElementById('password').value = encryptText;
    console.log('Encrypted words: ', encryptText);
    return encryptText;
}

function decrypt() {
    let inputText = document.getElementById('password').value;
    let decryptText = '';

    for (let i = 0; i < inputText.length; i++) {
        let input = inputText[i];
        decryptText += decryptMap[input] || input;
    }
    document.getElementById("password").value = decryptText;
    console.log("Decrypted text:", decryptText);
}
function getUserInfo() {
    email = document.getElementById("email").value;
    var encryptedPassword = encrypt()
    logInUrl = "https://localhost:7245/Home/LogIn?email=" + email + "&password=" + encryptedPassword + "";
    window.location.replace(logInUrl);
}

function forgetPassword() {
    email = document.getElementById("email").value;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    userName = firstName + " " + lastName;
    birthDay = document.getElementById("birthYear").value + "-" + document.getElementById("birthMonth").value + "-" + document.getElementById("birthDay").value;
    forgetPasswordUrl = "https://localhost:7245/Home/ForgetPassword?email=" + email + "&birthDay=" + birthDay + "&userName=" + userName + "";
    window.location.replace(forgetPasswordUrl);
}

function addUserInfo() {
    birthDay = formatBirthDayWithZero(document.getElementsByClassName("birthDay").value);
    if (checkPassword() == false) {
        return false;
    }
    if (validateUserBirthDay() == false) {
        return false;
    }
    firstName = document.getElementsByClassName("firstName").value;
    lastName = document.getElementsByClassName("lastName").value;
    birthDay = document.getElementsByClassName("birthYear").value + "-" + document.getElementsByClassName("birthMonth").value + "-" + birthDay;
    phoneNumber = document.getElementById("phoneNumber").value;
    email = document.getElementsByClassName("email").value;
    password = encrypt();
    passwordHint = document.getElementById("passwordHint").value;

    signUpUrl = "https://localhost:7245/Home/SignUp?email=" + email + "&firstName=" + firstName + "&lastName=" + lastName + "&birthDay=" + birthDay + "&phoneNumber=" + phoneNumber + "&password=" + password + "&passwordHint=" + passwordHint + "";
    window.location.replace(signUpUrl);
}

function formatPhoneNumber(value) {
     value = value.replace(/\D/g, "");
     value = value.substring(0, 10);
        // limit to 10 digits
     const phoneFormat = `${value.substring(0, 3)}-${value.substring(3, 6)}-${value.substring(6, 10)}`;
     return phoneFormat;
}

document.getElementsByClassName("phoneNumber").addEventListener("input", function (e) {
   e.target.value = formatPhoneNumber(e.target.value);
});

function formatBirthDayWithZero(value) {
    var tempVar;
    tempVar = value * 1;
    
    if (tempVar < 10) {
        value = 0 + value;
    }
    return value;
}

function formatBirthDay(value) {
    value = value.replace(/\D/g, "");
    value = value.substring(0, 2);
    return value;
}



document.getElementsByClassName("birthDay").addEventListener("input", function (e) {
    e.target.value = formatBirthDay(e.target.value);
});




biMap();