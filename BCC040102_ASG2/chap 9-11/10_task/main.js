// asgn 9-11 > 10 TEMPERATURE

var temperature = prompt("Enter Temperature;");
if (temperature >= 40 ){
    alert("It is too Hot outside");
}
else if (temperature >= 30 && temperature < 40){
    alert("The Weather today is Normal.");
}
else if (temperature >= 20 && temperature < 30){
    alert("Today’s Weather is cool");
}
else if (temperature >= 10 ){
    alert("“OMG! Today’s weather is so Cool.");
}