const http = require("node:http");

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : "application/json"});
    const data = {
        "name": "Govind",
        "lname" : "Yadav",
    };
    res.end(JSON.stringify(data));
});
server.listen(3000, () => {
    console.log("Server running on port 3000");
})