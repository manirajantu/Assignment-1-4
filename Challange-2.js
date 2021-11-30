
const mathematic = 99;
const english = 70;
const science = 81;
const motherTongue = 50;

// Add code here


function grade(score) {
    let GRADE = "Ä"
    if (score >= 90) {
    } else if (score >= 80) {
        GRADE = "B";
    } else if (score >= 70) {
        GRADE = "C";
    }else if (score >= 60) {
        GRADE = "D";
    } else
        GRADE = "F";

    return GRADE;

}
console.log("You graded  ", grade(mathematic), " for Mathematic.");
console.log("You graded  ", grade(english), " for English.");
console.log("You graded  ", grade(science), " for Science.");
console.log("You graded  ", grade(motherTongue), " for Mother Tongue.");

