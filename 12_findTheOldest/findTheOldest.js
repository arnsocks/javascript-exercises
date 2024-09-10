const findTheOldest = function(array) {
  return array.reduce((oldestFound, current) => {
    return findAge(oldestFound) >= findAge(current) ? oldestFound : current; 
  })
};

const findAge = function(person) {
  if (!person.yearOfDeath) {
    person.yearOfDeath = new Date().getFullYear();
  }
  let age = person.yearOfDeath - person.yearOfBirth;
  return age;
}
// Do not edit below this line
module.exports = findTheOldest;
