// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattenArray = [];
  while(arr.length > 0){
    if(Array.isArray(arr[0]) === false){
     flattenArray.push(arr[0]);
     arr.shift(0);
    } else {
      arr = arr.reduce(function(a,b){
        return a.concat(b);
      });
    }
  }
  return flattenArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
