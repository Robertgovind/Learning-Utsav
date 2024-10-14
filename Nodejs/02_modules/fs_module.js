const fs = require("node:fs");

// Reading file contents
console.log("first");
const fileContent = fs.readFileSync("./file.txt","utf-8");
console.log(fileContent);

console.log("second");
fs.readFile("./file.txt", "utf-8",(error,data) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});

// Writing file contents
fs.writeFileSync("new.txt","This is the new file created!!");

fs.writeFile("new.txt","Now the contents are changed!!",(error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("Data writtend successfully");
    }
});
console.log("final");
