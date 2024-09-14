/*
const student = {
      name: 'kuddus',
      rool: 69,
      class: 8,
      marks: {
            bangla: 90,
            english: 50,
            math: 46,
            polScience: 99,
            phiscalEducatio: 66,
            helthEducation: 33
      }
}
Question
1. kuddus total marks?
2. kuddus average marks?
3. kudduser sob chaite beshi marks and sob chaite kom marks?
4. kuddus kon bisoye pass korechhe (33 er beshi)
5. মোট প্রাপ্ত নম্বরের ভিত্তিতে সে কোন গ্রেড পেয়েছে? (গ্রেড সিস্টেম: ৮০ বা তার বেশি 'A+', ৭০-৭৯ 'A', ৬০-৬৯ 'A-', ৫০-৫৯ 'B', ৪০-৪৯ 'C', ৩৩-৩৯ 'D', এবং ৩৩ এর নিচে 'F')

*/
const student = {
    name: 'kuddus',
    rool: 69,
    class: 8,
    marks: {
          bangla: 90,
          english: 50,
          math: 46,
          polScience: 99,
          phiscalEducation: 66,
          helthEducation: 33
    }
}
const totalMarks = student.marks.bangla + student.marks.english + student.marks.math + student.marks.polScience + student.marks.phiscalEducation + student.marks.helthEducation;
const averageMarks = totalMarks / 6;

const marks = student.marks;
let biggestNumbers = marks.bangla;

if(marks.english > biggestNumbers){
    biggestNumbers = marks.english;
}
if(marks.math > biggestNumbers){
    biggestNumbers = marks.math;
}
if(marks.polScience > biggestNumbers){
    biggestNumbers = marks.polScience;
}
if(marks.phiscalEducation > biggestNumbers){
    biggestNumbers = marks.polScience;
}
if(marks.helthEducation > biggestNumbers){
    biggestNumbers = marks.helthEducation;
}
const bigNumber = Math.max(...Object.values(student.marks));
// console.log(bigNumber);
const smallNumber = Math.min(...Object.values(student.marks));
// console.log(smallNumber);
// console.log(biggestNumbers);
// মোট প্রাপ্ত নম্বরের ভিত্তিতে সে কোন গ্রেড পেয়েছে? (গ্রেড সিস্টেম: ৮০ বা তার বেশি 'A+', ৭০-৭৯ 'A', ৬০-৬৯ 'A-', ৫০-৫৯ 'B', ৪০-৪৯ 'C', ৩৩-৩৯ 'D', এবং ৩৩ এর নিচে 'F')


let grade;
if(totalMarks >= 80){
    grade = "A+";
}
else if(totalMarks >= 70 && totalMarks <= 79){
    grade = "A";
}
else if(totalMarks >= 60 && totalMarks <= 69){
    grade = "A-";
}
else if(totalMarks >= 50 && totalMarks <= 59){
    grade = "B";
}
else if(totalMarks >= 40 && totalMarks <= 49){
    grade = "C";
}
else if(totalMarks >= 33 && totalMarks <= 39){
    grade = "D";
}
else{
    grade = "F";
}
console.log(grade);