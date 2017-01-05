// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.


var reducer = function(a, b){
    return a + b;
};

var compiler = function(num){
  var i;
  var fib = []; // Initialize array!
  fib[0] = 0;
  fib[1] = 1;
    for(i=2; (fib[i-2] + fib[i-1]) <= num; i++) {
      fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
  };


function sumFibs(num){
  var fibArray = compiler(num);
  var oddFibs = [];
  for(var odds = 0; odds <= fibArray.length-1; odds++){
    if(fibArray[odds] % 2 !== 0){
      oddFibs.push(fibArray[odds]);
    }
  }
  return oddFibs.reduce(reducer,0);
}

sumFibs(10);
