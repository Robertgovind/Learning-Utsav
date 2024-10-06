// methods -> functions associated with an object
 
let arr = [1,2,3,4,5,6];
arr.forEach(function print(val){
    console.log(val);
})

//preferred way
arr.forEach((val)=>console.log(val))

let heroes = ["Iron Man","Hulk","Loki","Thor"];
heroes.forEach((val,idx,heroes) => {
    console.log(val, idx, heroes);
})