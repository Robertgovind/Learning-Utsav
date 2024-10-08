res = document.querySelectorAll("div");

res.forEach(val => {
    console.dir(val.innerHTML);
});

console.dir(res);

res[0].innerText = "First div";
res[1].innerText = "Second div";
res[2].innerText = "Third div";

console.log(res);
console.dir(res);

alert("The background color is going to change");
document.body.style.background = "purple";