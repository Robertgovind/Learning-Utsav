let btnText = "Dark Mode";
isLightMode = true;
let button = document.querySelector("button");
button.innerText = isLightMode?btnText:"LightMode";

button.onclick = ()=>{
    !isLightMode;
    let color = isLightMode?"white":"black";
    document.body.style.background = color;
    
}