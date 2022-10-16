///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE ///////////////////////// 

function generatePassword() {

  var length = Number(prompt("Enter a password length between 8 and 128")),
  charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.")

  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}



