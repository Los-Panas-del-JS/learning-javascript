const myString = 'this is a long long text 3981893 &(! "<)()A 7719 9182 91';

const alphaRegex = /[A-Za-z\s]/g;
const alphaMatched = [...myString.matchAll(alphaRegex)];

console.log('has alphanumerics', alphaRegex.test(myString));
console.log(alphaMatched.join(''));

const numericRegex = /[0-9\s]/g;
const multipleSpaceRegex = /[\s]{2,}/g;
const numericMatched = [...myString.matchAll(numericRegex)];
const numericMatchedString = numericMatched.join('').trim();

console.log('has numbers', alphaRegex.test(numericRegex));
console.log(numericMatchedString.replace(multipleSpaceRegex, ' '));

/**
 * /s = space
 * /S = not space
 * /w = alphanumeric = [A-Za-z0-9]
 * /W = not alphanumeric = [^A-Za-z0-9]
 */
const nonSpaceRegex = /[\S]/g;
const nonSpaceMatched = [...myString.matchAll(nonSpaceRegex)];
const nonSpaceMatchedString = nonSpaceMatched.join('');

console.log('non space matched', nonSpaceMatchedString);
