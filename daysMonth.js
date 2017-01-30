function days(month) {
  var str = "";
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      str = month + ' has 31 days';

      break;
    case "February":
      str = month + ' has 28 days ';
    default:
      str = month + ' has 30 days';

  }
  return str;
}
console.log(days(""));




// Write a function that takes the name of a month as an argument and use a switch statement to determine how many days are there in that month. For example if the parameter to the function is January, the function should display "January has 31 days".
