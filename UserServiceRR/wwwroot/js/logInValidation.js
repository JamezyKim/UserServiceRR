var ID;
var birthDay;
var phoneNumber;
var email;
var password;
var logInUrl;

const dataBase = [
    { email: 'yt4921@gmail.com', password: 'abc' },
    { email: 'nam@gmail.com', password: '123' },
    { email: 'ykkk@gmail.com', password: '123' }
]


function getUserInfo() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    logInUrl = "https://localhost:7245/Home/LogIn?email=" + email+ "&password=" + password + "";
    window.location.replace(logInUrl);
}

function addUserInfo() {
    ID = document.getElementById("ID").value;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    birthDay = document.getElementById("birthYear").value + "-" + document.getElementById("birthMonth").value + "-" + document.getElementById("birthDay").value;
    phoneNumber = document.getElementById("phoneNumber").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    signUpUrl = "https://localhost:7245/Home/SignUp?email=" + email + "&firstName=" + firstName + "&lastName=" + lastName + "&birthDay=" + birthDay + "&phoneNumber=" + phoneNumber + "&ID=" + ID +  "&password=" + password +  "";
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
    let inputText = document.getElementById('password').value;
    let encryptText = '';

    for (let i = 0; i < inputText.length; i++) {
        let input = inputText[i];
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