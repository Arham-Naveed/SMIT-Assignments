//Maximum between two values
function maxBetweenTwoNumbers(num1, num2) {
    return Math.max(num1, num2);
}


console.log(maxBetweenTwoNumbers(5, 10)); 







//Maximum between three values

function maxBetweenThreeNumbers(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}


console.log(maxBetweenThreeNumbers(5, 10, 7)); 


//Check whether a number is negative, positive, or zero.


function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}


console.log(checkNumber(-5)); 



//Check whether a number is divisible by 5 and 11 or not.


function checkDivisibility(num) {
    if (num % 5 === 0 && num % 11 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(checkDivisibility(55)); 






//  Check whether a number is even or odd.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7)); 



//Check whether a year is a leap year or not.


function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkLeapYear(2024)); 





//Check whether a character is a vowel or consonant.


function checkVowelConsonant(char) {
    let vowels = "aeiouAEIOU";

    if (vowels.includes(char)) {
        return "Vowel";
    } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        return "Consonant";
    } else {
        return "Not a valid alphabet";
    }
}

console.log(checkVowelConsonant('a')); 



//Check whether a character is uppercase or lowercase alphabet.

function checkCase(char) {
    if (char >= 'a' && char <= 'z') {
        return "Lowercase";
    } else if (char >= 'A' && char <= 'Z') {
        return "Uppercase";
    } else {
        return "Not an alphabet";
    }
}
console.log(checkCase('B')); 



//Input the week number and print the weekday.

function printWeekday(weekNumber) {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (weekNumber >= 1 && weekNumber <= 7) {
        return weekdays[weekNumber - 1];
    } else {
        return "Invalid week number";
    }
}

console.log(printWeekday(3)); 


//Input the week number and print the weekday.


function printWeekday(weekNumber) {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (weekNumber >= 1 && weekNumber <= 7) {
        return weekdays[weekNumber - 1];
    } else {
        return "Invalid week number";
    }
}

console.log(printWeekday(3)); 






//Input the month number and print the number of days in that month.

function getDaysInMonth(monthNumber) {
    let daysInMonth = {
        1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    };
    if (monthNumber >= 1 && monthNumber <= 12) {
        return daysInMonth[monthNumber];
    } else {
        return "Invalid month number";
    }
}


console.log(getDaysInMonth(2));





//Count a minimum number of notes in a given amount.

function countNotes(amount) {
    let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let notesCount = {};

    for (let i = 0; i < denominations.length; i++) {
        let note = denominations[i];
        if (amount >= note) {
            let count = Math.floor(amount / note);
            notesCount[note] = count;
            amount -= count * note;
        }
    }
    return notesCount;
}

console.log(countNotes(2378)); 





//Calculate percentage and grade according to marks in five subjects.

function calculateGrade(physics, chemistry, biology, mathematics, computer) {
    let totalMarks = physics + chemistry + biology + mathematics + computer;
    let percentage = (totalMarks / 500) * 100;
    let grade;

    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else if (percentage >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    return { percentage: percentage, grade: grade };
}

console.log(calculateGrade(85, 90, 78, 92, 88));







//Calculate Gross salary according to the basic salary of an employee.


function calculateGrossSalary(basicSalary) {
    let HRA, DA;

    if (basicSalary <= 10000) {
        HRA = 0.2 * basicSalary;
        DA = 0.8 * basicSalary;
    } else if (basicSalary <= 20000) {
        HRA = 0.25 * basicSalary;
        DA = 0.9 * basicSalary;
    } else {
        HRA = 0.3 * basicSalary;
        DA = 0.95 * basicSalary;
    }

    return basicSalary + HRA + DA;
}
console.log(calculateGrossSalary(15000)); 
