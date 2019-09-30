// asgn 9-10 > 3

var color = prompt("Enter Traffic signal color");
if (color === "red"){
    alert("Must Stop");
}else if (color === "yellow"){
    alert("Ready To Move");
}else if (color === "green"){
    alert("Move now");
}else {
    alert("You Enter Wrong Traffic Signal Color");
}