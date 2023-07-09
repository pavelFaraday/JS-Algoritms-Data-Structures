/* -------------------Objects-------------------- */

const person = {
	firstname: "Bruce",
	lastname: "Wayne",
};

let objKeys = Object.keys(person);
let objValues = Object.values(person);
let objEntries = Object.entries(person);

console.log(objKeys); // [ 'firstname', 'lastname' ]
console.log(objValues); // [ 'Bruce', 'Wayne' ]
console.log(objEntries); // [ [ 'firstname', 'Bruce' ], [ 'lastname', 'Wayne' ] ]
