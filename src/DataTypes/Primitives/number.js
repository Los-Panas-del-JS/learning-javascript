const distanceOne = 176.9721726182;
const distanceTwo = 191.2910212102;

const result = distanceOne + distanceTwo;

console.log('sum of distances:', result);

const pointX1 = 17.0192103197;
const pointY1 = 12.3891983193;
const pointX2 = 29.1821838128;
const pointY2 = 39.1988193101;

const normPoint1 = (pointX1 * pointX1) + (pointY1 * pointY1);
const normPoint2 = (pointX2 * pointX2) + (pointY2 * pointY2);
const squareNormPoint1 = normPoint1 * normPoint1;
const squareNormPoint2 = normPoint2 * normPoint2;

/*
* vector_unitary(u) = u/||u|| = u^2/(ux^2+uy^2)^2
*/
const normPointX1 = (pointX1 * pointX1) / (squareNormPoint1);
const normPointY1 = (pointY1 * pointY1) / (squareNormPoint1);

const normPointX2 = (pointX2 * pointX2) / (squareNormPoint2);
const normPointY2 = (pointY2 * pointY2) / (squareNormPoint2);

console.log('normalized vectors');

console.log('(x1, y1) => ', normPointX1, normPointY1);
console.log('(x2, y2) => ', normPointX2, normPointY2);
