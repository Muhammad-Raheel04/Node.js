const url=require('url');

const myURL=url.parse(
    'https://example.com:3200/products?id=10&sort=asc',
    true // true makes query a JS Object
);
console.log(myURL);
console.log(myURL.protocol);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.pathname);
console.log(myURL.query);
console.log(myURL.query.id);
console.log(myURL.query.sort);
