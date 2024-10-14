function sayHello(name){
    console.log(`Hello ${name}`);
}

function callFun(sayHello){
    const name = "Govind Kr Yadav";
    sayHello(name);
}

callFun(sayHello);

