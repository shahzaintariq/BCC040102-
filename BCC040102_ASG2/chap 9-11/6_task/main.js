// asgn 9-10 > 6 MARKSHEET

var totalmarks = prompt("enter total marks"),
    marksObtained = prompt("Marks Obtained in Thre subjects"),
    percentage = (marksObtained/totalmarks) * 100;

document.write("<h1>Mark Sheet</h1>" + "</br>");
document.write("<h3>Total Marks  :" + totalmarks + "</br>");
document.write("marks Obtained  :" + marksObtained + "</br>");
document.write("Percentage :" + percentage + "%" + "</br>");
if (percentage >= 80 && percentage <= 100){
    document.write("Grade :" + "A+1" + "</br>" );
    document.write("Remark :" + "Excellent");
}
else if (percentage >= 70 && percentage <= 80){
    document.write("Grade :" + "A" + "</br>" );
    document.write("Remark :" + "Good");
}
else if (percentage >= 60 && percentage <= 70){
    document.write("Grade :" + "B" + "</br>" );
    document.write("Remark :" + "You Need To Improve");
}
else if (percentage < 60 ){
    document.write("Grade :" + "Fail" + "</br>" );
    document.write("Remark :" + "Sorry");
}