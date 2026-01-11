const http = require("http");

http.createServer((req,resp)=>{
    resp.write("<h1>This is First server running on port 5000\n</h1>");
    resp.end("Hello from Server 1");
}).listen(5000);

http.createServer((req,resp)=>{
    resp.write("<h1>This is Second server running on port 6000\n</h1>");
    resp.end("Hello from Server 2");
}).listen(6000);