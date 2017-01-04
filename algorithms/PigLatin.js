// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Input strings are guaranteed to be English words in all lowercase.


function findVowel(str) {
    for(i=0; i < str.length; i++) {
      if (str[i] === "a" ||
         str[i] === "e" ||
         str[i] === "i" ||
         str[i] === "o" ||
         str[i] === "u")
      {
        return i;
      }
    }
}

function translatePigLatin(str) {
  if(str[0] === "a" ||
     str[0] === "e" ||
     str[0] === "i" ||
     str[0] === "o" ||
     str[0] === "u"){
   str = str + "way";
   return str;
  } else {
    z = findVowel(str);
    x = str.slice(0, z);
    y = str.substring(z);

  return y + x + "ay";
 }
}


translatePigLatin("consonant");
