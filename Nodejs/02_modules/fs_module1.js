// Promises in NodeJS
const fs = require("node:fs/promises");

const data = fs.readFile("file.txt","utf-8")
.then((data) => {
    console.log(data);
})
.then((error) => {
    console.log(error);
});

async function readFile() {
    try{
        const data = await fs.readFile("file.txt","utf-8");
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
readFile();