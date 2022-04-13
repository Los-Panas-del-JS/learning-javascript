function add(number1, number2) {
  return number1 + number2;
}

console.log(add(1, 2));
console.log(add(3, 5));

/**
 * 
 * @param {number} pointX
 * @param {number} pointY
 */
function Vector(pointX, pointY) {
  this.pointX = pointX;
  this.pointY = pointY;
}

Vector.prototype.print = function() {
  console.log('pointX:', this.pointX);
  console.log('pointY:', this.pointY);
};

/**
 * @returns {Vector}
 */
function buildZeroVector()
{
  return new Vector(0, 0);
}

function sumVector(
  pointX1,
  pointY1,
  pointX2,
  pointY2,
) {
  const vector = buildZeroVector();

  vector.pointX = (pointX1 + pointX2);
  vector.pointY = (pointY1 + pointY2);

  return vector;
}

let resultVector = sumVector(1, 1, 2, 2);

resultVector.print();

/**
 * @param {Vector} vector1
 * @param {Vector} vector2
 * @returns {Vector}
 */
function sumVectorV2(
  vector1,
  vector2,
) {
  const vector = buildZeroVector();

  vector.pointX = vector1.pointX + vector2.pointX;
  vector.pointY = vector1.pointY + vector2.pointY;

  return vector;
}

const vector1 = buildZeroVector();
const vector2 = buildZeroVector();

resultVector = sumVectorV2(vector1, vector2);

resultVector.print();
