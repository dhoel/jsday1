function beyond(n) {
  switch (true) {
    case !isFinite(n):
      console.log('And beyond.');
      break;
    case n > 0:
      console.log('To infinity');
      break;
    case n < 0:
      console.log('To negative infinity');
      break;
    case n === 0:
      console.log('Staying Home');
      break;
  }
}
console.log(beyond(5));
// Write a function called beyond which takes a single argument, num and logs a different message depending on its value.
//
// If num is infinite (either positive or negative) it should log out 'And beyond'.
// If num is finite and positive it should log out 'To infinity'.
// If num is finite and negative it should log out 'To negative infinity'.
// If num is zero it should log out 'Staying home'.
