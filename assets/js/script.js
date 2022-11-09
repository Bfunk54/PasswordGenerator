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
let letterLength

// Write password to the #password input
function writePassword() {
  let password = createPassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function passwordOptions() {
	let pass = [];
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

function createPassword() {
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
