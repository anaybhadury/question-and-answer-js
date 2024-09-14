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



