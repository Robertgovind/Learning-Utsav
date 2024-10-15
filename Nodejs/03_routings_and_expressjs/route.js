import http from "http";
import chalk from "chalk";

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.writeHead(200);
        res.end("Home Page");
    } else if(req.url == "/about"){
        res.writeHead(200);
        res.end("About page");
    } else if(req.url == "/contacts"){
        res.writeHead(200);
        res.end("Contacts page");
    } else {
        res.writeHead(404);
        res.end("Error");
    }

});
server.listen(3000,() => {
    console.log(chalk.bgGreen("Server is running on port 3000 !!!"));
});
