// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {


  while (true) {

    var userInput = window.prompt("Enter password length (8-128)")
    
    if (userInput === null) {
      return
    }

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("That's not a number!")  
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters")
    } else {
      break
    } 

  }


  var userUppercase = window.confirm("Would you like to include uppercase letters in your password?")
  var userLowercase = window.confirm("Would you like to include lowercase in your password?")
  var userNumbers = window.confirm("Would you like to include numbers in your password?")
  var userSymbols = window.confirm("Would you like to include symbols in your password?")

  var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
  var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
  var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
  var SYMBOl_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
  ).concat(
    arrayFromLowToHigh(91, 96)
  ).concat(
    arrayFromLowToHigh(123, 126)
  )
  

  var optionsSelected = []

}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
