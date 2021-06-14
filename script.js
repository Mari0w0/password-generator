// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasechar = "abcdefghijklmnopqrstuvwxyz";
var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
//add special characters
var generatePassword = function () {
  var passwordlength = window.prompt("how long is your password?");
  passwordlength = Number(passwordlength);
  console.log(passwordlength);
  var isuppercase = window.confirm("would you like uppercase letters?");
  var islowercase = window.confirm("would you like lowercase letters?");
  var isnums = window.confirm("would you like numbers?");
  var isspecial = window.confirm("would you like special characters?");
  console.log(isuppercase, islowercase, isnums, isspecial);
  var possiblechar = "";
  if (isuppercase) {
    possiblechar += uppercasechar;
  }
  if (islowercase) {
    possiblechar += lowercasechar;
  }
  if (isnums) {
    possiblechar += numbers;
  }
  console.log(possiblechar);
  var randomstring = '';
  for (var i=0; i<passwordlength; i++) {
      var rnum = Math.floor(Math.random() * possiblechar.length);
      randomstring += possiblechar.substring(rnum,rnum+1);
  }
  console.log(randomstring)
  return(randomstring)
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
