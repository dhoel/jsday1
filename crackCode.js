function decode(word) {
  switch (word[0]) {
    case "a":
      return word[1];
      break;
    case "b":
      return word[2];
      break;
    case "c":
      return word[3];
      break;
    case "d":
      return word[4];
      break;
    default :
      return " ";

  }
}

function submitWords(message) {
  var decodedWord = "";
  var temp = "";
  var words = message.split(" ");
  for (var i = 0; i < words.length; i++) {
    temp = decode(words[i]);
    decodedWord = decodedWord + temp;

  }
  return decodedWord;
}



console.log(submitWords("craft block argon meter bells brown croon droop"));


// check the first letter of a word
// if the first letter is an A, return the 2nd letter of the word
// if the first letter is a B, return the 3rd letter
// if the first letter is a C, return the 4th letter
// if the first letter is a D, return the 5th letter
// otherwise return a space
