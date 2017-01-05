// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.


var reducer = function(a, b) {
  return a + b;
};

function isPrime(value) {
  for(var i = 2; i < value; i++) {
      if(value % i === 0) {
          return false;
      }
  }
  return value > 1;
}

function sumPrimes(value) {
  var primesArray = [];
  var fullArray = [];
  for (var i = 0; i <= value; i++) {
    fullArray.push(i);
  }
  for (var i = 0; i <= fullArray.length; i++) {
    if (isPrime(fullArray[i]) === true) {
      primesArray.push(fullArray[i]);
    }
  }

  return primesArray.reduce(reducer, 0);
}
