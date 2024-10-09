class Animal {
    constructor(name){
        this.name = name;
        console.log("inside parent class constructor");
        console.log(this.name);
    }
    eat(){
        console.log("All animals eat food");
    }
    move(){
        console.log("All animals show body movement");
    }
};

class Dog extends Animal {
    constructor(name){
        super(name);
        console.log("inside constructor of child class dog"); // only this line gives error so we have to add super before it
    }
    speaks(){
        console.log("Dog barks");
    }
};

let obj1 = new Dog("dog");
obj1.move();
obj1.speaks();







