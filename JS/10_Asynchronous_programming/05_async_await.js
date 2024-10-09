
// function getApiData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Got api data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getData(){
//     await getApiData();  // 1st call
//     await getApiData();  // 2nd call
//     await getApiData();  // 3rd call
// }

// getData();

function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data" ,dataId);
            resolve(200);
        },2000);
    });
}

async function get(){
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    console.log("Getting data4...");
    await getData(4);
    
}
get();




