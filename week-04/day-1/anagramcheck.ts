'use strict';

function findAnagram (firstWord, secondWord) {
  var testWord = "";
  var c = 0;
  while (c < secondWord.length || c < firstWord.length) {
      while (secondWord[c] == " " || firstWord[c] == " ") {
      secondWord = secondWord.replace(" ", "");
      firstWord = firstWord.replace(" ", "");
  }
  c++;
  }
  
  if (firstWord.length == secondWord.length) {
      for (var i = 0; i < firstWord.length; i++) {
      for (var k = 0; k < secondWord.length; k++) {
          if (firstWord[i] == secondWord[k]) {
              testWord += firstWord[i];
              secondWord = secondWord.replace(secondWord[k], "")
              break;   
          }
      }
  }
  }
  if (firstWord == testWord){
      return true; 
  }
  else {
      return false;
  }
  }
  console.log(findAnagram("listen", "silent"));