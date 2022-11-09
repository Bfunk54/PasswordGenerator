// Assignment Code
let generateBtn = document.querySelector("#generate");
let passLength = document.getElementById('length');
let passLower = document.getElementById('lowercase');
let passUpper = document.getElementById('uppercase');
let passNumber = document.getElementById('numbers');
let passSymbols = document.getElementById('symbols');
let thePass = document.getElementById('password');

let lowercaseLetters = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercaseLetters = ['A', 'B' , 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '<', '>', ',', '.', '?', '/', '|', '`', '~'];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function createPassword() {
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
