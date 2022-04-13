const isExec = (function(x, y) {
  console.log('result:', x-y);

  return true;
})(9, 5);

console.log(isExec);
