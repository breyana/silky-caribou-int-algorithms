// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  //97-122
  var i = 0;
  var compNumber = str.charCodeAt(0);
  while(i < str.length){
    if(compNumber === str.charCodeAt(i)){
       compNumber++;
       i++;
       } else {
       return String.fromCharCode(compNumber);
       }
     }
}

fearNotLetter("abce");
