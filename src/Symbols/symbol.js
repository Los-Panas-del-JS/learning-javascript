const userTypeAdmin = Symbol('ADMIN');
const userTypeAdmin2 = Symbol('ADMIN');

console.log(userTypeAdmin == userTypeAdmin2);
console.log(userTypeAdmin === userTypeAdmin2);

console.log(userTypeAdmin.description == userTypeAdmin2.description);
console.log(userTypeAdmin.description === userTypeAdmin2.description);
