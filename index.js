const driver = 'bob';

console.log('this code was called');

const calledWithExactly = console.log(driver);

// 
//   it('invokes console.log() with the `driver` variable', function () {
//     expect(spy.calledWithExactly('bob')).to.be.true;
//   });
// 
//   it('invokes the console.log with the `driver` variable as the first argument and `is the driver variable name` as the second argument', function () {
//     expect(spy.calledWithExactly('bob', 'is the driver variable name')).to.be.true;
//   });
// });
// 
