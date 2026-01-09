const getTheTitles = function(books) {
  return books.reduce((result, next, index) => {
    result[index] = next.title;
    return result;
  }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
