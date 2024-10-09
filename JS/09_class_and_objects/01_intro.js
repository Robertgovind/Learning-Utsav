console.log("Class and Objects  and Prototype");

class Student{
    details(name, roll, age){
        this.name = name;
        this.roll = roll;
        this.age = age;
        console.log(name);
        console.log(roll);
        console.log(age);
    }
    result(marks){
        this.marks = marks;
        console.log(marks);
    }
    play(){
        console.log("Students can play any sport");
    }
}

let std1 = new Student();  // Here std1 is an object
console.log(std1);
std1.details("Govind",15,22);
std1.result(79);
console.log(std1);

console.log("Prototype in JS");
console.log(std1.toString());  // here toString() method is provided by protoype object

let sports = {
    sportsGradde : 8.9,
};
std1.__proto__ = sports;   // setting own prototype
console.log(std1.sportsGradde);

let res ={
    play(){
        console.log("Student can only play football");
    }
};
std1.__proto__ = res;
console.log(std1.play);
std1.play(); // ojects(res) method() is used

