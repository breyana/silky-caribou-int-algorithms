var reducer = function(a, b) {
  return a + b;
  };

function sumAll(arr) {
  var maxNumber = Math.max.apply(null, arr);
  var minNumber = Math.min.apply(null, arr);
  var reduceArray = [];

  for (var i = minNumber; i <= maxNumber; i++) {
    reduceArray.push(i);
  }

  return reduceArray.reduce(reducer, 0);
}

sumAll([1,4])
