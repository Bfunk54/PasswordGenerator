// Assignment Code
let generateBtn = document.querySelector("#generate");
let passLength = document.getElementById('length');
let passLower = document.getElementById('lowercase');
let passUpper = document.getElementById('uppercase');
let passNumber = document.getElementById('numbers');
let passSymbols = document.getElementById('symbols');
let thePass = document.getElementById('password');

// Added global variables for the different character types
let lowercaseLetters = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercaseLetters = ['A', 'B' , 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '<', '>', ',', '.', '?', '/', '|', '`', '~'];

// Write password to the #password input
function writePassword() {
  let password = createPassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function checking for which options the user has selected
function passwordOptions() {
	let pass = [];
	// Check if the password is less than 8 or more than 128 characters
	if (passLength < 8 || passLength > 128) {
		alert('Please try for a password between 8 and 128 characters');
		return;
	}
	// As long as it's not, run the switch to figure out which options the user has selected
	else {
	switch (true) {
		case passLower.checked && passUpper.checked && passNumber.checked && passSymbols.checked: pass = lowercaseLetters.concat(uppercaseLetters, numbers, specialCharacters); createPassword(pass);
			break;
		case passLower.checked && passUpper.checked && passNumber.checked: pass = lowercaseLetters.concat(uppercaseLetters, numbers); createPassword(pass);
			break;
		case passLower.checked && passUpper.checked && passSymbols.checked: pass = lowercaseLetters.concat(uppercaseLetters, specialCharacters); createPassword(pass);
			break;
		case passLower.checked && passNumber.checked && passSymbols.checked: pass = lowercaseLetters.concat(numbers, specialCharacters); createPassword(pass);
			break;
		case passUpper.checked && passNumber.checked && passSymbols.checked: pass = uppercaseLetters.concat(numbers, specialCharacters); createPassword(pass);
			break;
		case passLower.checked && passUpper.checked: pass = lowercaseLetters.concat(uppercaseLetters); createPassword(pass);
			break;
		case passLower.checked && passNumber.checked: pass = lowercaseLetters.concat(numbers); createPassword(pass);
			break;
		case passLower.checked && passSymbols.checked: pass = lowercaseLetters.concat(specialCharacters); createPassword(pass);
			break;
		case passUpper.checked && passNumber.checked: pass = uppercaseLetters.concat(numbers); createPassword(pass);
			break;
		case passUpper.checked && passSymbols.checked: pass = uppercaseLetters.concat(specialCharacters); createPassword(pass);
			break;
		case passNumber.checked && passSymbols.checked: pass = numbers.concat(specialCharacters); createPassword(pass);
			break;
		case passLower.checked: pass = lowercaseLetters; createPassword(pass);
			break;
		case passUpper.checked: pass = uppercaseLetters; createPassword(pass);
			break;
		case passNumber.checked: pass = numbers; createPassword(pass);
			break;
		case passSymbols.checked: pass = specialCharacters; createPassword(pass);
			break;
		default: alert('Please select at least one character type.');
		}
	}
}

// Use the selected options to create the password
function createPassword(pass) {
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
