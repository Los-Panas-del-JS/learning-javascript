const oddNumbers = [
  1,
  3,
  5,
  7,
  9,
  11,
  13,
  15,
];

/**
 * Array operations
 * map: transform all elements from one array
 * reduce: makes all elements from one array transform into one single value
 * filter: seek elements with search criteria
 *
 * numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * reduce(numbers, '+') => 55
 * filter(numbers, searchPrime) => [2, 3, 5, 7]
 * map(numbers, binaryFactor) => [2, 4, 6, 8 ....]
 *
 * 6
 * 2 3 4 5
 */

/**
 * @param {number} prevValue
 * @param {number} curValue
 */
function sumReducer(prevValue, curValue) {
  return prevValue + curValue;
}

const reduceResult = oddNumbers.reduce(sumReducer);

console.log('Reduce result:', reduceResult);

/**
 * @param {number} curValue
 * @returns {boolean}
 */
function searchPrime(curValue) {
  if (curValue <= 3) {
    return curValue > 1;
  }

  if ((curValue % 2 === 0) || (curValue % 3 === 0)) {
    return false;
  }

  let squareCounter = 5;

  for (;(squareCounter ** 2) <= curValue;) {
    if (
      (curValue % squareCounter === 0)
      || (curValue % (squareCounter + 2) === 0)
    ) {
      return false;
    }

    squareCounter += 6;
  }

  return true;
}

const primeNumbers = oddNumbers.filter(searchPrime);

console.log('Prime numbers are:', primeNumbers);

/**
 * @param {number} curValue
 */
function transformToPair(curValue) {
  if (curValue % 2 !== 0) {
    return curValue + 1;
  }

  return curValue;
}

const pairNumbers = oddNumbers.map(transformToPair);

console.log('Pair numbers are:', pairNumbers);
