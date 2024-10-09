
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;

    }

    viewData(){
        console.log("Name :",this.name);
        console.log("Email :",this.email);
    }
};

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }

    editData(name,email){
        super.name = name;
        super.email = email;
    }
}

let u1 = new User("Govind","govind803556@gmail.com");
u1.viewData();

let a1 = new Admin("Mohit","mohitsinghbudal@gmail.com");
a1.viewData();
a1.editData("Dhiraj","dhirajmahato@gamil.com");
a1.viewData();



