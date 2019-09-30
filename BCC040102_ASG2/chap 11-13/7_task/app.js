// asgn 11-13 > 7

var hours = prompt("Enter Your Time in 24 hours(format)");
if (hours >= 0000 && hours < 1200){
    alert("Good Morning");
} else if (hours >= 1200 && hours < 1700){
    alert("Good Afternoon");
} else if (hours >= 1700 && hours < 2100){
    alert("Good Evening");
} else if (hours >= 2100 && hours <= 2359){
    alert("Good Night")
}    