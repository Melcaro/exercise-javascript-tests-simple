function checkConfirmationEmail(mail, confirmedMail) {
  return mail === confirmedMail ? 'correct' : 'not correct';
}

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

function kebabToSnakeCase(string) {
  return string
    .split('')
    .map(letter => (letter === '-' ? '_' : letter))
    .join('');

  // OU return string.replace(/-/g,'_')
}

function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  } else if (num === 1) {
    return 1;
  }
  return 0;
}

function largestNumber(num1, num2, num3, num4) {
  return Math.max(num1, num2, num3, num4);
}

function longestWord(string1, string2) {
  return string1.length > string2.length ? string1 : string2;
}

function countdown(num) {
  if (num > 0) {
    console.log(num);
    return countdown(num - 1);
  }
  return 0;
}

function summer(num) {
  if (num > 0) {
    return num + summer(num - 1);
  }
  return 0;
}

module.exports = {
  checkConfirmationEmail,
  isEven,
  kebabToSnakeCase,
  factorial,
  largestNumber,
  longestWord,
  countdown,
  summer,
};
