var firstInput = true;
var secondInput = false;

console.log('firstInput (i1)', firstInput);
console.log('secondInput (i2)', secondInput);

/**
 * Bit operands
 * 
 * AND (&&)
 * OR (||)
 * NOT (!)
 * XOR (~)
 */

var andAppliedToInputs = firstInput && secondInput;

console.log('i1 AND i2 equals to', andAppliedToInputs);

var orAppliedToInputs = firstInput || secondInput;

console.log('i1 OR i2 equals to', orAppliedToInputs);

/**
 * Morgan Law
 * 
 * !(i1 && i2) = !i1 || !i2
 */
var appliedNotForInputs = !(firstInput && secondInput);
var morganEquivalentForInputs = !firstInput || !secondInput;
var areMorganEquivalent = appliedNotForInputs === morganEquivalentForInputs;

console.log('!(i1 AND !i2)', appliedNotForInputs);
console.log('NOT(i1) OR NOT(i2)', morganEquivalentForInputs);
console.log('!(i1 AND !i2) == NOT(i1) OR NOT(i2)', areMorganEquivalent);
