const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt",{
    encoding : "utf-8",
    highWaterMark : 4,
});
const writeStream = fs.createWriteStream("./new.txt");

readableStream.on("data" ,(chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
});

