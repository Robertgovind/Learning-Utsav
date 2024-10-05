let age = 23;
if(age >= 19){
    console.log("You are eligible to vote !!");
}
else {
    console.log("You are not eligible to vote !!");
}

let marks = 55;
if(marks >= 80){
    console.log("Very good");
}
else if(marks >= 60){
    console.log("Good");
}
else if(marks >=32){
    console.log("Average");
}
else{
    console.log("Poor");
}

age >= 18 ? console.log("Vote") : console.log("Can't vote");

let num = 5;
switch(num){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    default:
        console.log("Greater than four");
    
}