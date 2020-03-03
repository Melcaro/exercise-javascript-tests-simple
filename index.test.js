const {
  checkConfirmationEmail,
  isEven,
  kebabToSnakeCase,
  factorial,
  largestNumber,
  longestWord,
  countdown,
  summer,
} = require('./index');

// describe('check mail module', () => {
//   test('this two mails check should return correct', () => {
//     expect(checkConfirmationEmail('mel@mel.fr', 'mel@mel.fr')).toBe('correct');
//   });

//   test('this two mails check should return not correct', () => {
//     expect(checkConfirmationEmail('mel@mel.fr', 'mel@maill.fr')).toBe(
//       'not correct'
//     );
//   });
// });

// describe('isEven module', () => {
//   test('this number check should return true', () => {
//     expect(isEven(2)).toBe(true);
//   });

//   test('this number check should return false', () => {
//     expect(isEven(3)).toBe(false);
//   });
// });

// describe('kebabToSnakeCase module', () => {
//   test('the sentence returned should have _ instead of -', () => {
//     expect(kebabToSnakeCase('bon-jour')).toBe('bon_jour');
//   });

//   test('the sentence returned should have _ instead of -', () => {
//     expect(kebabToSnakeCase('-Salut_')).toBe('_Salut_');
//   });
// });

// describe('factorial module', () => {
//   test('factorial(2) is supposed to return 2', () => {
//     expect(factorial(2)).toBe(2);
//   });
//   test('factorial(5) is supposed to return 120', () => {
//     expect(factorial(5)).toBe(120);
//   });
//   test('factorial(0) is supposed to return 0', () => {
//     expect(factorial(0)).toBe(0);
//   });
// });

// describe('largest number module', () => {
//   test('should return 4', () => {
//     expect(largestNumber(1, 2, 3, 4)).toBe(4);
//   });

//   test('should return -1', () => {
//     expect(largestNumber(-1, -2, -3, -4)).toBe(-1);
//   });
// });

// describe('longest word module', () => {
//   test('should return string1', () => {
//     expect(longestWord('coucou', 'non')).toBe('coucou');
//   });

//   test('should return string2', () => {
//     expect(longestWord('pai,', 'chocolat')).toBe('chocolat');
//   });
// });

// describe('summer module', () => {
//   test('should return sum of numbers', () => {
//     expect(summer(5)).toBe(15);
//   });

//   test('should return sum of numbers', () => {
//     expect(summer(10)).toBe(55);
//   });
// });

describe('countdown', () => {
  afterEach(() => {
    spy.mockReset();
  });

  const spy = jest.spyOn(console, 'log');

  test('checked if console.log is called', () => {
    countdown(5);
    expect(spy).toHaveBeenCalledTimes(5);
  });

  test('checked if console.log is called', () => {
    countdown(10);
    expect(spy).toHaveBeenCalledTimes(10);
  });
});
