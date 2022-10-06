// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 -rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

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

  var upperCase = []
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]

  var passwordCharacters = []  

  for (var i = 0; i < lowerCase.length; i++) {
    upperCase[i] = lowerCase[i].toUpperCase()
  }
  
  if (userUppercase === true) {
    passwordCharacters.push(upperCase)
  }

  if (userLowercase === true) {
    passwordCharacters.push(lowerCase )
  }

  if (userSymbols === true) {
    passwordCharacters.push(numberList)
  }

  if (userLowercase === true) {
    passwordCharacters.push(symbolList)
  }

  if (passwordCharacters.length === 0) {
    passwordCharacters.push(lowerCase)
  }

  var makePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(passwordCharacters)
    var randomChar = getRandomItem(randomList)
    makePassword += randomChar
  }

  return makePassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
