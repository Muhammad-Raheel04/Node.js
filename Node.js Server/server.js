const http = require("http");

http.createServer((req,resp)=>{
    resp.write("<h1>This is my first server\n</h1>");
    resp.end("Hello world");
}).listen(4000);