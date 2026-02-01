const { log } = require('console');
const url = require('url');

// this is a deprecated way but still in use
// it can cause inconsistency with modern URL standards
// and behaves differently from the browser URL API
// const myURL = url.parse(
//     'https://example.com:3200/products?id=10&sort=asc',
//     true // true makes query a JS Object
// );
// console.log(myURL);
// console.log(myURL.protocol);
// console.log(myURL.hostname);
// console.log(myURL.port);
// console.log(myURL.pathname);
// console.log(myURL.query);
// console.log(myURL.query.id);
// console.log(myURL.query.sort);

// instead use
const myURL = new URL(
    'https://example.com:3200/products?id=10&sort=asc'
)
console.log(myURL);
console.log(myURL.protocol);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.pathname);

console.log(myURL.searchParams.get('id'));
console.log(myURL.searchParams.get('sort'));

// modifiying url
myURL.searchParams.append('page',2); // appening this to url
myURL.searchParams.set('sort','desc'); // updating sort value

console.log(myURL.toString()); // https://example.com:3200/products?id=10&sort=desc&page=2