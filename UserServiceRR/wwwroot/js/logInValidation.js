var userName;
var birthDay;
var phoneNumber;
var email;
var password;
var logInUrl;
var confirmPassword;
var passwordHint;
var day;
var year;
var month;

function validateUserBirthDay() {
    day = parseInt(document.getElementById("birthDaySignUp").value || document.getElementById("birthDayForgetPassword").value);
    year = parseInt(document.getElementById("birthYearSignUp").value || document.getElementById("birthYearForgetPassword").value);
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
    email = document.getElementById("emailSignUp") || document.getElementById("emailForgetPassword");
    email = email.value;
    firstName = document.getElementById("firstNameSignUp") || document.getElementById("firstNameForgetPassword");
    firstName = firstName.value;
    lastName = document.getElementById("lastNameSignUp") || document.getElementById("lastNameForgetPassword");
    lastName = lastName.value;
    userName = firstName + " " + lastName;
    //birthDay = (document.getElementById("birthYearSignUp") || document.getElementById("birthYearForgetPassword")) + "-" + (document.getElementById("birthMonthSignUp") || document.getElementById("birthMonthForgetPassword")) + "-" + formatBirthDayWithZero(document.getElementById("birthDaySignUp")) || formatBirthDayWithZero(document.getElementById("birthDayForgetPassword"));
    year = document.getElementById("birthYearSignUp") || document.getElementById("birthYearForgetPassword");
    month = document.getElementById("birthMonth");
    day = document.getElementById("birthDaySignUp") || document.getElementById("birthDayForgetPassword");
    birthDay = year.value + "-" + month.value + "-" + formatBirthDayWithZero(day.value);
    forgetPasswordUrl = "https://localhost:7245/Home/ForgetPassword?email=" + email + "&birthDay=" + birthDay + "&userName=" + userName + "";
    window.location.replace(forgetPasswordUrl);
}

function addUserInfo() {
    if (checkPassword() == false) {
        return false;
    }
    if (validateUserBirthDay() == false) {
        return false;
    }
    firstName = document.getElementById("firstNameSignUp").value || document.getElementById("firstNameForgetPassword").value;
    lastName = document.getElementById("lastNameSignUp").value || document.getElementById("lastNameSignUp").value;
    birthDay = (document.getElementById("birthYearSignUp").value || document.getElementById("birthYearForgetPassword").value) + "-" + (document.getElementById("birthMonthSignUp").value || document.getElementById("birthMonthForgetPassword").value) + "-" + formatBirthDayWithZero(document.getElementById("birthDaySignUp").value) || formatBirthDayWithZero(document.getElementById("birthDayForgetPassword").value);
    phoneNumber = document.getElementById("phoneNumber").value;
    email = document.getElementById("emailSignUp").value || document.getElementById("emailForgetPassword").value;
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

const phoneNumberInput = document.getElementById("phoneNumber");
if (phoneNumberInput) {
    phoneNumberInput.addEventListener("input", function (e) {
        e.target.value = formatPhoneNumber(e.target.value);
    });
}

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



const birthDaySignUp = document.getElementById("birthDaySignUp");
if (birthDaySignUp) {
    birthDaySignUp.addEventListener("input", function (e) {
        e.target.value = formatBirthDay(e.target.value);
    });
}

const birthDayForgetPassword = document.getElementById("birthDayForgetPassword");
if (birthDayForgetPassword) {
    birthDayForgetPassword.addEventListener("input", function (e) {
        e.target.value = formatBirthDay(e.target.value);
    });
}



biMap();