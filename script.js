// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = [1, 2, 3, 4, 5, 6];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
var specSymbol = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var newPassword = "";
  var useCharacters = []; //set to a empty array
  var numChar;
  do {
    numChar = prompt(
      "How many characters would you like your password to contain"
    );
  } while (numChar < 8 || numChar > 128);
  console.log(numChar);
  do {
    useCharacters = [];
    var lowCase = confirm(
      "Do you want to use lower case characters in your password"
    );
    if (lowCase) {
      for (i = 0; i < lowerChar.length; i++) {
        useCharacters.push(lowerChar[i]);
      }
    }
    var upCase = confirm(
      "Do you want to use upper case characters in your password"
    );
    if (upCase) {
      for (i = 0; i < upperChar.length; i++) {
        useCharacters.push(upperChar[i]);
      }
    }
    var specChar = confirm(
      "Do you want to use special characters in your password"
    );
    if (specSymbol) {
      for (i = 0; i < specSymbol.length; i++) {
        useCharacters.push(specSymbol[i]);
      }
    }
    var useNum = confirm("Do you want to use Numbers in your password");
  } while (
    lowCase === false &&
    upCase === false &&
    specChar === false &&
    useNum === false
  );
  for (i = 0; i < numChar; i++) {
    newPassword +=
      useCharacters[Math.floor(Math.random() * useCharacters.length)];
  }
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//build my prompt // how many characters would you like your password to contain 9-126
// var numChar = confirm("How many characters would you like your password to contain")
//enter password
//confirm prompt for special characters Yes or No so a boolean
//confirm prompt for lower case
//set up array for special char
//set up array for lower case
//set up array for upper case

//need to store our passwords created
//set up if statements
