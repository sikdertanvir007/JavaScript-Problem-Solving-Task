Problem 2: Count Vowels in a String
Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

Example:

Input: "programming"
Output: 3

Solution Code : 

function vowelsCount(string) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}


