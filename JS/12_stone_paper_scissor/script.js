let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

const draw = ()=>{
    message.innerText = "Draw!" ;
    message.style.backgroundColor = "#081b31";
}
const showWinner = (userWin) => {
    if(userWin){
        message.innerText = "You Won!";
        message.style.backgroundColor = "green";
        userScore++;
        userSc.innerText = userScore;
    }
    else{
        message.innerText = "You Lose!";
        message.style.backgroundColor = "red";
        compScore++;
        compSc.innerText = compScore;

    }
}

const playGame = (userChoice) => {
    const compChoice = generateCompChoice();

    if(userChoice === compChoice){
        draw();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        } 
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});