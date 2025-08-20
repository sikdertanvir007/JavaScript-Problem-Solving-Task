Problem 5: Remove Duplicates from an Array
Write a function that removes all duplicate numbers from an array.

Example:

Input: [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]


Solution Code : 

function removeDuplicates(array) {
  let uniqueNumbers = []; 

  for (let i = 0; i < array.length; i++) {
    if (!uniqueNumbers.includes(array[i])) {
      uniqueNumbers.push(array[i]); 
    }
  }

  return uniqueNumbers;
}

