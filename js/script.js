// #generate element. This is a button.
var generateBtn = document.querySelector("#generate");



// var characters, numers, upper and lower case.
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// fuction when button is clicked.
generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

function generatePassword() {
var enter = parseInt(prompt("how many characters would you like?"));

if (!enter) {
  alert("this needs a value");
} 
else if (enter < 8 || enter > 128) {
  var enter = parseInt(prompt(("Please choose between 8-128.")));
}
else{
  var confirmNumber = confirm("Will this contain numbers?");
  var confirmCharacter = confirm("Will this contain special characters?");
  var confirmUppercase = confirm("Will this contain Uppercase letters?");
  var confirmLowercase = confirm("Will this contain Lowercase letters?");
};


// choose atleaset one type of character or else outcomes.
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  var choices = alert("You must choose a criteria!")
}

else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  var choices = character.concat(number, alpha, alphaUpper)
}

else if (confirmCharacter && confirmNumber && confirmUppercase) {
  var choices = character.concat(number, alphaUpper)
}

else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  var choices = character.concat(alpha, alphaUpper)
}

else if (confirmNumber && confirmLowercase && confirmCharacter) {
  var choices = character.concat(number, alpha)
}

else if (confirmLowercase && confirmUppercase && confirmNumber) {
  var choices = alpha.concat(alphaUpper, number)
}

else if (confirmCharacter && confirmLowercase){
  var choices = character.concat(alpha)
}

else if (confirmCharacter && confirmNumber) {
  var choices = character.concat(number)
}

else if (confirmCharacter && confirmUppercase ) {
  var choices = character.concat(alphaUpper)
}

else if (confirmUppercase && confirmLowercase) {
  var choices = alphaUpper.concat(alpha)
}

else if (confirmUppercase && confirmNumber) {
  var choices = alphaUpper.concat(number)
}

else if (confirmLowercase &&  confirmNumber){
  var choices = alpha.concat(number)
}

else if (confirmNumber) {
  var choices = number
}

else if (confirmCharacter) {
  var choices = character
}

else if (confirmLowercase) {
  var choices = alpha
}

else if (confirmUppercase) {
  var choices = alphaUpper;
};



// Password generator
var password = [];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}

var ps = password.join("");
    UserInput(ps);
    return ps;
}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}