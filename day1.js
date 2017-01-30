function whoAmI(name, age) {
  var yearOfBirth = calcYOB(age);
  console.log("my name is " + name  + " and I'm "+ age + " years young");
  console.log("I was born in " + yearOfBirth +".");
}

function calcYOB(age) {
try {

  if (age < 1) {
    throw new Error("Age must be a positive value.");
    return 2017 - age;
  }
} catch (e) {
  console.log('Something is wrong: ' + e.message);
}
}

whoAmI("aaron", 39);
