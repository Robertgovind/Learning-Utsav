
// Promise chaining
function fun1() {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("data1");
            resolve("Success");
        }, 4000);
    }); 
}
function fun2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("Success");
        }, 4000);
    });
}
console.log("fetching data1");
fun1().then((res) => {
    console.log("getting data2");
    fun2().then((res) => {
    });
});

// example 2
function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("successful");
        },2000);
    });
}

getData(1).then((res) => {
    return getData(2);
}).then((rel) => {
    return getData(3);
}).then((res) => {
    return getData(4);
}).then((res) => {
    console.log(res);
});


