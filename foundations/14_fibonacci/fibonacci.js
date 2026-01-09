const fibonacci = function(n) {
 
  switch(true) {
    case n < 0:
      return "OOPS";
    case n == 0:
      return 0;
    case n == 1:
      return 1;
    default:
      return (fibonacci(n - 1) + fibonacci(n - 2));
  }
};

// Do not edit below this line
module.exports = fibonacci;
