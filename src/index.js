import {
  calculateAreaOfCircle,
  calculateAverageWithVariadicParameters,
  convertMiToKm,
  getAverage,
  getLetterGrade,
  isLeapYear,
} from "./utils.js";

console.log(convertMiToKm(1)); // 1.60934

console.log(calculateAreaOfCircle(1)); // 3.141592653589793

console.log(getLetterGrade(90)); // A

console.log(getAverage([1, 2, 3, 4, 5])); // 3

console.log(isLeapYear(2020)); // true

console.log("hi", "hello", "bye", "goodbye");

console.log(calculateAverageWithVariadicParameters(1, 2, 3, 4, 5)); // 3
