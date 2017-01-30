function jediName(first, last) {
  var firstThree = last.slice(0, 3);
  var secondTwo = first.slice(0, 2);
  return firstThree + secondTwo;
}

console.log(jediName("david", "hoel"));

// extract first 3 letters of last name
// extract first 2 letters of the first name
// combine those extracted strings into a new string
// return new string
