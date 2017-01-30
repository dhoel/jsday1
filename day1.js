function whoAmI(name, age) {
  var yearOfBirth = calcYOB(age);
  console.log("my name is " + name  + " and I'm "+ age + " years young");
  console.log("I was born in " + yearOfBirth +".");
}

function calcYOB(age) {
  return 2017 - age;
  }
whoAmI("aaron", 39);
