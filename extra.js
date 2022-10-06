// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
console.log("\nExercise 1");
let array = [1, 12, 14, 3, 5];

array.reverse();

console.log(array);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/
console.log("\nExercise 2");

array.sort(function (a, b) {
  return a - b;
});
console.log(array[array.length - 1]);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/
console.log("\nExercise 3");
console.log(array[0]);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
console.log("\nExercise 4");

const even = array.filter((number) => {
  return number % 2 === 0;
});

console.log(even);
/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
console.log("\nExercise 5");
array = array.filter((number) => {
  return number % 2 !== 0;
});

console.log(array);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.*/
console.log("\nExercise 6");

const wordWithVowals = "Alexander";

const noVowels = wordWithVowals.replace(/[aeiou]/gi, "");

console.log(noVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
console.log("\nExercise 7");
console.log("before = ", array);
array = array.map((num) => num + 1);
console.log("after = ", array);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
console.log("\nExercise 8");
const arrayWithStrings = ["Hello", "Bye", "Peace"];

arrayWithStrings.(arrayWithStrings.length);

console.log(arrayWithStrings);
