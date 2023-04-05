let asnwer = parseInt(prompt('Please add a number to count:'));

for (let i = 1; i <= answer; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('BuzzFizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
