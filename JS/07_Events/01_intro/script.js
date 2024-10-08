let button = document.querySelector("button");

button.onclick = () =>{
    console.log("the button was clicked");
}

let box = document.querySelector("#box");
box.onmouseover = ()=>{
    console.log("Mouse was hovered");
    document.querySelector("div").style.background = "yellow";
    document.body.style.background = "green";
}

let box1 = document.querySelector("#box1");
box1.onmouseover = (e)=>{
    document.body.style.background = "grey";
    console.log(e);
    console.dir(e);
}

button.addEventListener("click",()=>{
    document.body.style.background = "white";
})