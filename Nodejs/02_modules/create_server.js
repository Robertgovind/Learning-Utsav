const http = require("node:http");

const server = http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type': 'text/html',
      });
    res.end("Hello World");
});

server.listen(4000, () => {
    console.log("Running on port 3000");
});


