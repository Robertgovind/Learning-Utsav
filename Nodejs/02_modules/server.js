import http from "http";

const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end("Backend is working properly");
});

server.listen(3000);