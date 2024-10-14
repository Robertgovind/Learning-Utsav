const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    let html = fs.readFileSync(__dirname + "/index.html","utf-8");
    const name = "Govind";
    html = html.replace("{{name}}",name);
    res.end(html);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
