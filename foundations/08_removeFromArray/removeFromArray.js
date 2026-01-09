const removeFromArray = function(array, ...args) {
  for (const arg of args) { //look at every removal argument...
    for (let i = array.length -1; i >= 0; i--) { // and every item still in the array
      if (arg === array[i]) { // splice them out if they match
        array.splice(i, 1);       
      }
    }
  }

  /* This is the technique used in the provided solution 
  let newArray = [];
  for (const item of array)
  {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
  */

  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
