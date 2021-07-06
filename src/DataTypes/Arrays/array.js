const items = [
  'apple',
  'bannana',
  'watermelon',
];

console.log('Traversing array with foreach:');
items.forEach((item) => {
  console.log(item);
});

console.log('Mapping an array with map:');
items.map((item) => {
  item = item.concat('2');

  console.log(item);

  return item;
});

console.log('Traversing array with for/in:');
// eslint-disable-next-line guard-for-in
for (const itemIndex in items) {
  const item = items[itemIndex];

  console.log(item);
}

console.log('Traversing array with for: ');

for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
  const item = items[itemIndex];

  console.log(item);
}
