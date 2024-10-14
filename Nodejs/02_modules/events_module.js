const eventsEmitter = require("node:events");

const emitter = new eventsEmitter();

emitter.on("exam", (grade, name) => {
    console.log(`${name} You have grade : ${grade}`);
});
emitter.on("exam", (grade) => {
    if(grade < 40) {
        console.log("You have failed the exam");
    }else{
        console.log("You have passed the exam");
    }
});

emitter.emit("exam",80,"Govind Kr Yadav");


