const firstInput = true;
const secondInput = false;

console.log('firstInput (i1)', firstInput);
console.log('secondInput (i2)', secondInput);

/**
 * Bit operands
 * AND (&&)
 * OR (||)
 * NOT (!)
 * XOR (~)
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
