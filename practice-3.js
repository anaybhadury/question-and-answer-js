/**
 * Write a letter grade point
 * 80-100 to grade point is A+
 * 70-79 to grade point is A
 * 60-69 to grade point is A-
 * 50-59 to grade point is B
 * 40-49 to grade point is C
 * 33-39 to grade point is D
 * 0-32 to grade point is F
 * 
 */

var marks = 100;

if(marks > 100 || marks < 0){
    console.log('invalid');
}
else if(marks >= 80 && marks <= 100){
    console.log('Your Grade Is: A+');
}
else if(marks >= 70 && marks <= 79){
    console.log('Your Grade Is: A');
}
else if(marks >= 60 && marks <= 69){
    console.log('Your Grade Is: A-');
}
else if(marks >= 50 && marks <= 59){
    console.log('Your Grade Is: B');
}
else if(marks >= 40 && marks <= 49){
    console.log('Your Grade Is: C');
}
else if(marks >= 33 && marks <= 39){
    console.log('Your Grade Is: D');
}
else{
    console.log('Your Grade Is: F');
}

console.log("your mark is: ", marks);