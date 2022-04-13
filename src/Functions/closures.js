const countNumbers = [1, 2, 3, 4, 5, 6];

const next = (function(numbers) {
  let index = 0;

  return function () {
    if (index === numbers.length -1) {
      index = 0;
    }
    
    const number = numbers[index++];

    console.log(number);

    return number;
  }
})(countNumbers);

console.log('simple iterator');

next();
next();
next();
next();
next();
next();
next();
next();
next();

const rewindableIterator = (function(numbers) {
  let index = 0;

  return {
    prev: function() {
      if (index === 0) {
        index = numbers.length - 1
      }

      const number = numbers[--index];

      console.log(number);

      return number;
    },
    next: function() {
      if (index === numbers.length - 1) {
        index = 0;
      }

      const number = numbers[index++];
  
      console.log(number);
  
      return number;
    }
  }
})(countNumbers);

console.log('rewindable iterator');

rewindableIterator.next();
rewindableIterator.next();
rewindableIterator.next();
rewindableIterator.next();
rewindableIterator.next();
rewindableIterator.next();
rewindableIterator.next();

rewindableIterator.prev();
