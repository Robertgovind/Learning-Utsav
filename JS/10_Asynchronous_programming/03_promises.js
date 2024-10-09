// let p1 = new Promise((resolve,reject) => {
//     console.log("This is promise");
// });
// console.log(p1);

// let p2 = new Promise((resolve,reject) => {
//     console.log("This is resolved promise");
//     resolve("Successful");
// });
// console.log(p2);

// // let p3 = new Promise((resolve,reject) => {
// //     console.log("This is rejected promise");
// //     reject("Error occured");
// // });
// // console.log(p3);

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             console.log("Data",dataId);
//             resolve("Successful");
//             //reject("Error");
//         },5000);
//     });
// }
// let res = getData(123);
// console.log(res);

// function getPromise(){
//     return new Promise((resolve,reject) => {
//         console.log("Promise fulfilled");
//         resolve("Success");
//     });
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log(res);
// });

// promise.catch((err) => {
//     console.log(err);
// });





