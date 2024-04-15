function reverse(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverse(word);
  return word === reversedWord;
}

/*
  Add your pseudocode here
  that means if the word is the same as the word in reverse, I should return true.
  
  reverse the input string
  if the input is the same as the reversed input
    return true
  else
    return false
*/

if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
