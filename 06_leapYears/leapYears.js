const leapYears = function(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) return true;
      return false;
    }
    return true;
  }
  return false;
};

//BELOW IS THE GIVEN SOLUTION
//The benefit of this approach is that the calculation is much more 
//human readable.
const leapYears2 = function(year) {
  const isDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isDivisibleByFourHundred = year % 400 === 0;

  if (
    isDivisibleByFour && 
    (!isCentury || isDivisibleByFourHundred)
  ) {
    return true;
  } else {
    return false;
  }
}
// Do not edit below this line
module.exports = leapYears;
