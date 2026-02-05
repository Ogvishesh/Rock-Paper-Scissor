let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const gencomputerChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // rock , paper , scissor
};


const drawGame = () => {
    msg.innerText = "Game was a draw play again. ";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userchoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! your ${userchoice} beats computers ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText =  `You lose! computers ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame  = (userchoice) => {
    // Generate computer choice 
    const compChoice = gencomputerChoice();
   

    if(userchoice === compChoice){
        // Draw game
        drawGame();
    }else {
        let userWin = true;
        if(userchoice === "rock"){
            // scissor , paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            // scissor , rock
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock , paper 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userchoice , compChoice);      
    }
};

choices.forEach((choice) => {
   
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});