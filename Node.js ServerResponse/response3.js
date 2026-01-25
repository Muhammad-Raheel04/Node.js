const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("THis is my Home page");
    }
    else if (req.url === '/about') {
        res.end("This is my About Page");
    }
    else if (req.url === '/contact') {
        res.end("This is my Contact Page");
    }
    else {
        res.end('404, Resource not found');
    }
})
server.listen(5000, () => {
    console.log("Server listening at port 5000")
})