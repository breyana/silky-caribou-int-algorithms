//Return an English translated sentence of the passed binary string.

//The binary string will be space separated.

function binaryAgent(str) {
  var str2array = str.split(" ");
  var result = "";
  for (var i = 0; i < str2array.length; i++) {
    result += String.fromCharCode(parseInt(str2array[i], 2));
  }
  return result;
}
