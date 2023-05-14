// WAP to output Grade “C” if entered marks are between 50-65, “B” for 66-80 and
// “A” for 80-90 and “A+” for above 90.

var marks;
function result(marks) {
  if (marks < 65 && marks > 50) {
    console.log("Grade C");
  } else if (marks < 80 && marks >= 65) {
    console.log("Grade B");
  } else if (marks < 90 && marks > 80) {
    console.log("Grade A");
  } else if (marks > 90) {
    console.log("Grade A+");
  }
}

marks = 65;
result(marks);
marks = 81;
result(marks);
marks = 95;
result(marks);
