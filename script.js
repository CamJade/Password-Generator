// Assignment Code
let generateBtn = document.querySelector("#generate");
//variables for prompts-gives global scope
let passwordLength;
let wantSpecialCh;
let wantNumber;
let wantUpperCase;
let wantLowerCase;
let options;
//Arrays for values
let characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "`", "~" ];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let generatedPass = [];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//prompts
function generatePassword() {
  passwordLength = prompt("Please give number of characters you would like your password to contain.");
    //ensures length is within limits
    if (!passwordLength) {
      alert ("Must enter a value.");
      prompt("Please give number of characters you would like your password to contain.");
    }
    else if (passwordLength < 8 || passwordLength > 128) {
      alert ("Password length must be between 8 and 128 characters.");
      prompt("Please give number of characters you would like your password to contain.");      
    }
    else {
      wantSpecialCh = confirm ("Click ok if you would like your password to contain special characters.");
        if(wantSpecialCh === true) {
          generatedPass = generatedPass.concat(characters);
        }
      wantNumber = confirm ("Click ok if you would like your password to include numbers.");
        if(wantNumber === true) {
          generatedPass = generatedPass.concat(number);
        }
      wantUpperCase = confirm ("Click ok if you would like your password to include uppercase letters.");
        if(wantUpperCase === true) {
          generatedPass = generatedPass.concat(upper);
        }
      wantLowerCase = confirm ("Click ok if you would like your password to include uppercase letters.");
        if(wantLowerCase === true) {
          generatedPass = generatedPass.concat(lower);
        }
    };
  


  let pass = " ";
  for (let i = 0; i < passwordLength; i++) {
    pass = pass += generatedPass [Math.floor(Math.random(generatePassword) * (generatedPass.length))] ;
  }
  return pass;
};

function generatedPassword() {
  document.getElementById("password").textContent;
}

generatedPassword();


//code was refactored to take up less space

//    //all negative options   
//    if (!wantSpecialCh && !wantNumber && !wantUpperCase && !wantLowerCase) {
//      alert("Must choose options.");
//      return generatePassword();
//    }
//    //all positive options
//    else if (wantSpecialCh && wantNumber && wantUpperCase && wantLowerCase) {
//    generatedPass = generatedPass.concat(characters, number, upper, lower);
//    }
//  //start combinations if one is negative
//  else if (!wantSpecialCh && wantNumber && wantUpperCase && wantLowerCase) {
//    generatedPass = generatedPass.concat(number, upper, lower);
//  }
//  else if (wantSpecialCh && !wantNumber && wantUpperCase && wantLowerCase) {
//    generatedPass = generatedPass.concat(characters, upper, lower);
//  }
//  else if (wantSpecialCh && wantNumber && !wantUpperCase && wantLowerCase) {
//    generatedPass = generatedPass.concat(characters, number, lower);
//  }
//  else if (wantSpecialCh && wantNumber && wantUpperCase && !wantLowerCase) {
//    generatedPass = generatedPass.concat(characters, number, upper);
//  }
//  //two negative
//  else if (!wantSpecialCh && !wantNumber && wantUpperCase && wantLowerCase) {
//    generatedPass = generatedPass.concat(upper, lower);
//  }
//  else if (wantSpecialCh && !wantNumber && !wantUpperCase && wantLowerCase) {
//    generatedPass = generatedPass.concat(characters, lower);
//  }
//  else if (wantSpecialCh && wantNumber && !wantUpperCase && !wantLowerCase) {
//    generatedPass = generatedPass.concat(upper, lower);
//  }
//  else if (wantSpecialCh && wantNumber && wantUpperCase && wantLowerCase) {
//    generatedPass = generatedPass.concat(characters, number, upper, lower);
//  }
  