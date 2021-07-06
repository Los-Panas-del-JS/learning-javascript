const myMessage = 'I am learning javascript';

console.log(myMessage);

/**
 * Character Access
 */
console.log('First character is:', myMessage.charAt(100)); // ever use charAt
console.log('First character is:', myMessage[100]); // unsafe operation

/**
 * Comparing strings
 */
const comparedString = 'I am learning javascript';

console.log('Are two strings equals?', (comparedString === myMessage)); // fast way to compare

/**
 * Template string
 */
const replacedValue = 'own value';

console.log(`I am replacing value replacedValue with ${replacedValue}`);

/**
 * String operations
 */

console.log();
console.log('String operations');
console.log('lower case', myMessage.toLowerCase());
console.log('upper case', myMessage.toUpperCase());
console.log('trimming', myMessage.concat('a a a aaaa a        ').trim());
console.log('slice', myMessage.slice(1, 6));
console.log('indexOf', myMessage.indexOf('a'));
console.log('reverse', myMessage.split('').reverse().join(''));

/**
 * String conversion
 */
const number = 121;

console.log(number.valueOf());
