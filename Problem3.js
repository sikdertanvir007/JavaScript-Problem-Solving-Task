Problem 3: Check for Palindrome
Write a function that checks if a string is a palindrome (reads the same forward and backward).

Example:

Input: "madam"
Output: true
Input: "hello"
Output: false

Solution Code : 

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}


