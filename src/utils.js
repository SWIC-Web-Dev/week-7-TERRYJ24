// 1. Write a function called: convertMiToKm. This takes in a number of miles and returns the equivalent number of kilometers. 1 mile is equal to 1.60934 kilometers. To manually test this, try: console.log(convertMiToKm(1)); which should return 1.60934.
function convertMiToKm(miles) {
    return miles * 1.60934;
}

console.log(convertMiToKm(1));

// 2. Write a function called: calculateAreaOfCircle. This takes in a radius and returns the area of a circle. The formula for the area of a circle is π * r^2. You can use Math.PI for the value of π. To manually test this, try: console.log(calculateAreaOfCircle(1)); which should return 3.141592653589793.

function calculateAreaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

console.log(calculateAreaOfCircle(1));

// 3. Write a function called: getLetterGrade. This takes in a number grade and returns the letter grade. The grading scale is as follows:
    // 90-100: A
    // 80-89: B
    // 70-79: C
    // 60-69: D
    // 0-59: F To manually test this, try: console.log(getLetterGrade(90)); which should return A.

function getLetterGrade(grade) {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(getLetterGrade(90));

// 4. Write a function called: getAverage. This takes in an array of numbers and returns the average of those numbers. To manually test this, try: console.log(getAverage([1, 2, 3, 4, 5])); which should return 3.

function getAverage(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(getAverage([1, 2, 3, 4, 5]));

// 5. Write a function called isLeapYear. This takes in a year and returns true if it's a leap year and false if it's not. A leap year is divisible by 4, but not by 100 unless it is divisible by 400. To manually test this, try: console.log(isLeapYear(2020)); which should return true.

