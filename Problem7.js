Problem 7: Find Even Numbers in an Array
Write a function that returns all even numbers from a given array.

Example:

Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]

Solution Code :

function findEvenNumbers(array) {
  let evenNumbers = []; // এখানে সব জোড় সংখ্যা রাখা হবে

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) { // যদি সংখ্যা জোড় হয়
      evenNumbers.push(array[i]);
    }
  }

  return evenNumbers;
}


