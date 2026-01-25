const http = require("http");

http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader("Content-Type", "application/json");

    const data = {
        name: "Raheel",
        role: "Node.js Learner",
    }

    resp.end(JSON.stringify(data));
}).listen(4001, () => {
    console.log("Server running at port 4001");
})