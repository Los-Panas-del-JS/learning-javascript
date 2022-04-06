const myObject = {
  dev: '/dev/null',
  loop: true,
};

myObject.dev = myObject.dev.concat('0');

console.log('dev', myObject.dev);
console.log('loop', myObject.loop);

/**
 * Operations
 */
const objectKeys = Object.keys(myObject);
const objectValues = Object.values(myObject);

console.log('Object keys are:', objectKeys.join(', '));
console.log('Object values are:', objectValues);

/**
 * Traversing
 */
// Get the keys (UNSAFE)

console.log('Traverse objects keys with unsafe foreach');

/** @param {string} objectKey */
for (const objectKey in myObject) {
  console.log(objectKey);
}

let objectKey = '';

// Get the keys (SAFE + FASTEST)

console.log('Traverse object keys with safe and fastest for');

for (let keyIndex = 0; keyIndex < objectKeys.length; keyIndex += 1) {
  objectKey = objectKeys[keyIndex];

  console.log(objectKey);
}

/**
 * Append new keys and values
 */
myObject['myNewKey'] = 'asifjiuasdjufjasif'; // UNSAFE

console.log('Unsafe access and assignment', myObject.myNewKey);

myObject.myNewKey2 = 'oiafijasdifsfoi'; // SAFEST

console.log('Safe access and assignment', myObject.myNewKey2);
