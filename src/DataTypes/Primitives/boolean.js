const firstInput = true;
const secondInput = false;

console.log('firstInput (i1)', firstInput);
console.log('secondInput (i2)', secondInput);

/**
 * Bit operands
 * AND (&&)
 * OR (||)
 */

const andAppliedToInputs = firstInput && secondInput;

console.log('i1 AND i2 equals to', andAppliedToInputs);

const orAppliedToInputs = firstInput || secondInput;

console.log('i1 OR i2 equals to', orAppliedToInputs);

/**
 * Morgan Laws
 * !(i1 && i2) = !i1 || !i2
 */
const appliedNotForInputs = !(firstInput && secondInput);
const morganEquivalentForInputs = !firstInput || !secondInput;
const areMorganEquivalent = appliedNotForInputs === morganEquivalentForInputs;

console.log('!(i1 AND !i2)', appliedNotForInputs);
console.log('NOT(i1) OR NOT(i2)', morganEquivalentForInputs);
console.log('!(i1 AND !i2) == NOT(i1) OR NOT(i2)', areMorganEquivalent);

/**
 * Bitwise operations
 * AND (&)
 * OR (|)
 * XOR (^)
 * NOT (~) Negative representation for a number
 */
const firstNumber = 2;
const secondNumber = 1;

const andTwoNumbersResult = firstNumber & secondNumber;

console.log('n1 & n2', andTwoNumbersResult);

const orTwoNumbersResult = firstNumber | secondNumber;

console.log('n1 | n2', orTwoNumbersResult);

/**
 * 0010
 * 0001
 * 
 * 0010 = 1101
 * 
 * 0101 = 1010
 * 
 * 0000 = 1111
 * 
 * -6 -5 -4 -3 -2 -1 0 1 2 3 4 5
 * 
 * 0101 -> 1010 = -6
 */

const xorTwoNumbersResult = firstNumber ^ secondNumber;

console.log('n1 ^ n2', xorTwoNumbersResult);

const notFirstNumber = ~2147483647;

console.log((notFirstNumber >>> 0).toString(2));

console.log('!n1', notFirstNumber);

/**
 * Rotation operators
 */

