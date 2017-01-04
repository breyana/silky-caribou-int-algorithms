// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
// Return the provided character as the first element in each array.
//
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function stringCreation(str) {
  var pair = "";
  for(var i = 0; i <= str.length; i++){
    if(str[i] === "C"){
      pair = pair + "G";
    } else if(str[i] === "G"){
      pair = pair + "C";
    } else if (str[i] === "A"){
      pair = pair + "T";
    } else if (str[i] === "T"){
      pair = pair + "A";
    }
  }
  return pair;
}

function pairElement(str) {
  var pair = stringCreation(str).split("");
  var other = str.split("");
  var cool = [];
  for(var i= 0 ; i < pair.length; i++){
    cool.push([other[i],pair[i]]);
  }
  return cool;
}

pairElement("ATCGA");
