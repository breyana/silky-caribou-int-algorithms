// Sum all the prime numbers up to and including the provided number.
//
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
//
// The provided number may not be a prime.


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
