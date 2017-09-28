const driver = 'bob';

console.log('this code was called');

// const calledWithExactly = console.log(driver);

// const calledWithExactly = console.log(driver, 'is the driver variable name');

function calledWithExactly(driver, sentence) {
  console.log(driver, sentence);
}