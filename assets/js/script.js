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

// user choice variables
let passwordLength;
let symbols;
let numbers;
let uppercase;
let lowercase;

// Password value options
const sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];
const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let userSelection;


// function to generate password
function generatePassword() {
  
  // prompt for password length
  while (true) {
    passwordLength = parseInt(prompt("Choose the length of your password. This needs to be between 8 - 128"));
    // if not entered between 8 and 128 characters alert to make proper selections
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
    
    alert("Please select a number between 8 - 128");
  }
  // prompts for what to include in password
  symbols = confirm("Select 'OK' if you would like to include special characters");
  numbers = confirm("Select 'OK' if you would like to include numbers");
  uppercase = confirm("Select 'OK' if you would like to include uppercase letters");
  lowercase = confirm("Select 'OK' if you would like to include lowercase letters");
   
   //if nothing selected let them know to pick at least one option
   if (!symbols && !numbers && !uppercase && !lowercase) {
    alert("Please make at least one selection");
    // all possible user selected character combinations for password generation
 }  else if (symbols && numbers && uppercase && lowercase) {
     userSelection = sym.concat(num, upper, lower);
 }  else if (symbols && numbers && uppercase) {
     userSelection = sym.concat(num, upper);
 }  else if (symbols && numbers && lowercase) {
     userSelection = sym.concat(num, lower);
 }  else if (symbols && lowercase && uppercase) {
     userSelection = sym.concat(lower, upper);
 }  else if (numbers && lowercase && uppercase) {
     userSelection = num.concat(lower, upper);
 }  else if (symbols && numbers) {
     userSelection = sym.concat(num);
 }  else if (symbols && lowercase) {
     userSelection = sym.concat(lower);
 }  else if (symbols && uppercase) {
     userSelection = sym.concat(upper);
 }  else if (lowercase && numbers) {
     userSelection = lower.concat(num);
 }  else if (lowercase && uppercase) {
     userSelection = lower.concat(upper);
 }  else if (numbers && uppercase) {
     userSelection = num.concat(upper);
 }  else if (symbols) {
     userSelection = sym;
 }  else if (numbers) {
     userSelection = num;
 }  else if (lowercase) {
     userSelection = lower;
 }  else if (uppercase) {
     userSelection = upper;
 };
 //random selection to create password out of above selected options
 let password = ''
 for (let i = 0; i < passwordLength; i++) {
   password += userSelection[Math.floor(Math.random() * userSelection.length)] 
 }
 //  show the generated password
 return password;
 
}



