function add() {
  number1 = parseInt(arguments[0]);
  number2 = parseInt(arguments[1]);

  return number1 + number2;
}

console.log(add(1, 2, 3, 4, 5));
console.log(add(3, 5, 4, 6, 8));

function addWithMore(number1, number2, ...numbers) {
  const argNumbers = Object.values(arguments);

  return number1 + number2 + numbers.reduce(add) + argNumbers.reduce(add);
}

console.log(addWithMore(1, 2, 3, 4, 5));

const arrayNumbers = [2, 3, 5, 1, 6, 7, 7];

function sumWithMap(...numbers) {
  let sumResult = 0;

  numbers.map(function (number) {
    sumResult += number;

    return number;
  });

  return sumResult;
}

console.log(sumWithMap(arrayNumbers));

function sumWithMap2() {
  let sumResult = 0;

  return function(number, index) {
    sumResult = sumResult + number;

    if (index === (arrayNumbers.length - 1)) {
      console.log(sumResult);
    }

    return number;
  };
}

console.log(arrayNumbers.map(sumWithMap2()));
