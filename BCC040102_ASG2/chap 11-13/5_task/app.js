// asgn 11-13 > 5

var password = "pakistan";
var enterPassword = prompt("Enter Your Password");
if (enterPassword === password){
    alert("correct Password");
} 
else if (enterPassword === ""){
    alert("please Enter Your Password");
}
else if (enterPassword !== password){
    alert("Your Password Is Incorrect");
}