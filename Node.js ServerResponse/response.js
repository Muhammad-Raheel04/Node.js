const http=require("http");

http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/json")
    resp.end("<h6>Muhammad Raheel</h6>");
}).listen(4000);