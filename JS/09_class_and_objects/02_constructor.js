// class Animal {
//     constructor(){
//         console.log("Inside constructor");
//     }
//     eat(){
//         console.log("All animals eat");
//     }
//     speaks(){
//         console.log("All animals speaks");
//     }
// };
// let dog = new Animal();
// dog.eat();
// dog.speaks();


class Animal {
    constructor(name){
        this.name = name;
        console.log("Inside constructor");
    }
    eat(){
        console.log(this.name," eat");
    }
    speaks(){
        console.log(this.name," speaks");
    }
};
let dog = new Animal("Dog");
dog.eat();
dog.speaks();


let cat = new Animal();
cat.eat();
cat.speaks();

