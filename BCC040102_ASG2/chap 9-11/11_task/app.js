// Asgn 9-11 > 11 
 
var firstNumber = prompt("Enter First Number"),
    SecondNumber = prompt("Enter Second number");
    operation = prompt("Enter Your Operation Here :");

if (operation == "+"){
    alert(firstNumber + SecondNumber);
} else if (operation == "-") {
    alert(firstNumber - SecondNumber);
} else if (operation == "*"){
    alert(firstNumber * SecondNumber);
} else if (operation == "/"){
    alert(firstNumber / SecondNumber);
} else if (operation == "%"){ 
    alert(firstNumber % SecondNumber);
}  else {
    alert(" Please Enter correct operation in format like(+,-,*,/,%)")
}