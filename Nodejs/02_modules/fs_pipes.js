const fs = require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream("./file.txt");
const writeStream = fs.createWriteStream("./new.txt");

readableStream.pipe(writeStream);

const gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(fs.createWriteStream("./new.txt.gz"));