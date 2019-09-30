// Asg 9-11 > 7 GUESS GAME 

var secretNumber = 8,
    guessNumber = prompt("Guess The Secret Number");
if (secretNumber == guessNumber) {
    alert("Bingo! correct answer");
} else if (guessNumber == secretNumber + 1 || guessNumber == secretNumber -1){
    alert("close enough to correct answer");
} else {
    alert("Try Again");
}