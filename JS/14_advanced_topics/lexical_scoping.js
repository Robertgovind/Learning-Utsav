function outer() {
  let usrname = "govind";
  function inner() {
    console.log("inner ", usrname);
    let password = "sdfsdfs";
  }
  function getPassword() {
    console.log(password); // doesnot have access
  }
}
console.log(username); // doesnot have access
outer();
