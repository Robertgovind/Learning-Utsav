const http = require("node:http");

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.writeHead(200,{"Content-Type" : "text/plain}"});
        res.end("Home page");
    } else if(req.url == "/about"){
        res.writeHead(200,{"Content-Type" : "text/plain}"});
        res.end("About page");
    } else if(req.url == "/contact") {
        res.writeHead(200,{"Content-Type" : "text/plain}"});
        res.end("Contact page");
    } else {
        res.writeHead(404,{"Content-Type" : "text/plain}"});
        res.end("page not found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});