Problem 8: Capitalize First Letter of Each Word
Write a function that capitalizes the first letter of each word in a string.

Example:

Input: "hello world"
Output: "Hello World"

Solution Code : 

function capitalizeWords(str) {
  let words = str.split(" "); 
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      
      let capitalizedWord = word[0].toUpperCase() + word.slice(1);
      capitalized.push(capitalizedWord);
    }
  }

  return capitalized.join(" ");
}

