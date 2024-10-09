// function hello(){
//     console.log("Hello World");
// }
// setTimeout(hello,3000); // executes after 3 seconds

// function getData(dataId){  // takes time to fetch data
//     setTimeout(() => {
//         console.log("data", dataId);
//     },2000);
// }

// getData(1);

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
  // This is callbacks hell
getData(1,()=> {
    getData(2,()=> {
        getData(3,()=> {
            getData(4);
        });
    });
});




