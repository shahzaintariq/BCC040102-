// asgn 11-13 > 1

var character = prompt("Enter Your Character Here :"),
    character = character.charCodeAt(0);
    
if (character >= 65 && character <= 90){
    alert("Character Is Capital Letter ")
} else if (character >= 97 && character <= 122){
    alert("Character Is small Letter ")
} else if (character >= 48 && character <= 57){
    alert("Your Character is Digits/integers")
}