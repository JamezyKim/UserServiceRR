var birthDay;
var phoneNumber;
var email;
var password;
var logInUrl;
var confirmPassword;
function validateUserBirthDay() {
    const day = parseInt(document.getElementById("birthDay").value);
    const year = parseInt(document.getElementById("birthYear").value);
    if ((0 > day || day > 31) || (year < 1900 || year > 2026) || (isNaN(day) || isNaN(year))) {
        alert("Enter valide birthday");
        return false;
    }
}

function getUserInfo() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    logInUrl = "https://localhost:7245/Home/LogIn?email=" + email+ "&password=" + password + "";
    window.location.replace(logInUrl);
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

function addUserInfo() {
    if (checkPassword() == false) {
        return false;
    }
    if (validateUserBirthDay() == false) {
        return false;
    }
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    birthDay = document.getElementById("birthYear").value + "-" + document.getElementById("birthMonth").value + "-" + document.getElementById("birthDay").value;
    phoneNumber = document.getElementById("phoneNumber").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    signUpUrl = "https://localhost:7245/Home/SignUp?email=" + email + "&firstName=" + firstName + "&lastName=" + lastName + "&birthDay=" + birthDay + "&phoneNumber=" + phoneNumber +  "&password=" + password +  "";
    window.location.replace(signUpUrl);
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


biMap();