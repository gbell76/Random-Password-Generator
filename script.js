// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const generatePassword = () => {
  const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const special =[' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '{', '|', '}', '~']
  let isUpper = prompt("Do you want your password to allow uppercase letters? (y/n)")
  while(isUpper.toLowerCase() !== 'y' && isUpper.toLowerCase() !== 'n'){
    isUpper = prompt("Please select y or n for whether your password allows uppercase letters")
  }
  let isLower = prompt("Do you want your password to allow lowercase letters? (y/n)")
  while(isLower.toLowerCase() !== 'y' && isLower.toLowerCase() !== 'n'){
    isLower = prompt("Please select y or n for whether your password allows lowercase letters")
  }
  let isNumeric = prompt("Do you want your password to allow numbers? (y/n)")
  while(isNumeric.toLowerCase() !== 'y' && isNumeric.toLowerCase() !== 'n'){
    isNumeric = prompt("Please select y or n for whether your password allows numbers")
  }
  let isSpecial = prompt("Do you want your password to allow special characters? (y/n)")
  while(isSpecial.toLowerCase() !== 'y' && isSpecial.toLowerCase() !== 'n'){
    isSpecial = prompt("Please select y or n for whether your password allows special characters")
  }
  let len = prompt("How long would you like your password to be? (8-128)")
  while(len < 8 || len > 128){
    len = prompt("Please select a length between 8 and 128")
  }
  if(isUpper.toLocaleLowerCase() === 'n' && isLower.toLocaleLowerCase() === 'n' && isNumeric.toLocaleLowerCase() === 'n' && isSpecial.toLocaleLowerCase() === 'n'){
    alert("Cannot generate a password with no character types. Please click the generate password button again.")
    return "";
  }else{
    let password = ""
    let characterPool = []
    if(isUpper.toLocaleLowerCase() === 'y'){
      characterPool = characterPool.concat(upper)
    }
    if(isLower.toLocaleLowerCase() === 'y'){
      characterPool = characterPool.concat(lower)
    }
    if(isNumeric.toLocaleLowerCase() === 'y'){
      characterPool = characterPool.concat(numeric)
    }
    if(isSpecial.toLocaleLowerCase() === 'y'){
      characterPool = characterPool.concat(special)
    }
    for(i = 0; i < len; i++){
      password += characterPool[Math.floor(Math.random() * characterPool.length)]
    }
    return(password)
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
