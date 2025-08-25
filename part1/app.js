// function sanitize(x) {
//     if (Number.isNaN(x)) {
//       return NaN;
//     }
//     return x;
//   }
  
//   console.log(sanitize("1"));
//   // Expected output: "1"
  
//   console.log(sanitize("NotANumber"));
  // Expected output: NaN

  isNaN(123);   // false, because 123 is a valid number
  isNaN('123'); // false, because '123' can be converted to a number
  isNaN('abc'); // true, because 'abc' cannot be converted to a number
  isNaN(NaN);   // true, because NaN is not a number
  isNaN(undefined); // true, because undefined is not a valid number
  
  Number.isNaN(123);    // false
Number.isNaN('123');  // false
Number.isNaN('abc');  // false
Number.isNaN(NaN);    // true
