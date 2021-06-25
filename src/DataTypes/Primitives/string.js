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
