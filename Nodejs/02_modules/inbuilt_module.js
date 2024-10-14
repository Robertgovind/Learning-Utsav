import * as fs from "node:fs/promises";

await fs.writeFile("./new.txt","This is the new file created using ");

try {
    let fileContents = await fs.readFile("./new.txt",'utf-8');
    console.log(fileContents);
} catch(err) {
    console.log(err);
}



