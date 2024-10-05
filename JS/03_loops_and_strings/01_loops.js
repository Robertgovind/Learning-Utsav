
// for() loop
 sum = 0;
 for(let i=0;i<10;i++){
    sum += i;
 }
 console.log("Sum is : ",sum);

 // while loop
 sum = 0;
 i = 1;
 while(i<=10){
   sum += i;
   i++;
 }

 // do while loop
 i = 1;
 do {
   console.log(i);
   i++;
 }while(i<=10);

 // for of loop
 st = "Govind";
 for(let val of st){
   console.log(val);
 }

 // for in loop
 const student = {
   name : "Govind",
   roll : 15,
   fac : "paso78bei015",
   gpa : 3.7,
 };
 for(let val in student){
  console.log(val);
 }
