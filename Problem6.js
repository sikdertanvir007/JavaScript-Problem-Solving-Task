Problem 6: Sum of All Numbers in an Array
Write a function that returns the sum of all numbers in an array.

Example:

Input: [1, 2, 3, 4]
Output: 10

Solution Code : 

function sumAllArray(array) {
  let sum = 0; 
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; 
  }
  return sum;
}


