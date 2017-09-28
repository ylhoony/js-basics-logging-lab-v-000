const driver = 'bob';

console.log('this code was called');

function calledWithExactly(driver, sentence) {
  console.log(driver, sentence );
}



// 
//   it('invokes the console.log with the `driver` variable as the first argument and `is the driver variable name` as the second argument', function () {
//     expect(spy.calledWithExactly('bob', 'is the driver variable name')).to.be.true;
//   });
// });
// 
