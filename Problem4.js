Problem 4: Find the Maximum Number
Write a function that takes an array of numbers and returns the largest number.

Example:

Input: [5, 1, 9, 3]
Output: 9

Solution Code : 

function findMaximum(array) {
  let maximum = array[0]; 

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i]; 
    }
  }

  return maximum;
}


