let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-game');
let newGameBtn = document.querySelector('.new-game');
let winContainer = document.querySelector('.winner-container');
let winner = document.querySelector("#winner");



let turnO = true; // player O
let count = 0;

// let log = document.createElement(`<div class="container">
//             <div class="game">
//             <button class="box"></button>
//             <button class="box"></button>
//             <button class="box"></button>
//             <button class="box"></button>
//             <button class="box"></button>
//             <button class="box"></button>
//             <button class="box"></button>
//             <button class="box"></button>
//             <button class="box"></button>
//         </div>
//         </div>`);
let historyBox = document.querySelector(".history-box");

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    winContainer.classList.add("hide");
    count = 0;
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        if(count == 9){
            winner.innerText = "Draw :)";
            winContainer.classList.remove("hide");
        }
        let ele = document.createElement("<div></div>");
        historyBox.innerHTML.append(ele);
    });
});
const enableBoxes = () => {
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    });
};
const disableBoxes = () => {
    boxes.forEach((box)=>{
        box.disabled = true;
    });
};
const showWinner = (w) =>{
    winner.innerText = `Congratulation, Player ${w}`;
    winContainer.classList.remove("hide");
    disableBoxes();
    count = 0;

};
const checkWinner = ()=>{
    for(pattern of winPatterns){
        if(boxes[pattern[0]].innerText != "" &&
            boxes[pattern[1]].innerText != "" && 
            boxes[pattern[2]].innerText != ""){
            if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText
                && boxes[pattern[0]].innerText === boxes[pattern[2]].innerText){
                showWinner(boxes[pattern[0]].innerText);
            }
        }
    }
};
newGameBtn.addEventListener('click',resetGame);
resetButton.addEventListener('click',resetGame);


