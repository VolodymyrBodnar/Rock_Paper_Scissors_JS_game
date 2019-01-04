let userScore = 0;
let computerScore = 0;
// DOM variables
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoise(){
    const choices = ['Rock','Paper','Scissors'];
    let i = Math.floor(Math.random()*3)
    return choices[i]
}

function win(user,comp){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultDiv.innerHTML = `You win! The ${user} beats the ${comp}`
    scoreBoardDiv.classList.add('green-glow');
    setTimeout(function(){scoreBoardDiv.classList.remove('green-glow');},300)
}
function lose(user,comp) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `You loose... the ${comp} beats the ${user}`
    scoreBoardDiv.classList.add('red-glow');
    setTimeout(function(){scoreBoardDiv.classList.remove('red-glow');},300)
}
function draw(choice){  
    resultDiv.innerHTML = "It's a draw" ;
    scoreBoardDiv.classList.add('grey-glow');
    setTimeout(function(){scoreBoardDiv.classList.remove('grey-glow');},300)
}

function game(userChoise){
    let computerChoise = getComputerChoise()
    switch (userChoise+computerChoise){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoise,computerChoise);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            lose(userChoise,computerChoise);
            break;
        case "ScissorsScissors":
        case "RockRock":
        case "PaperPaper":
            draw(userChoise);
    }
}

function main(){
    rockDiv.addEventListener('click', function(){
        game('Rock');
    })

    paperDiv.addEventListener('click', function(){
        game('Paper');
    })

    scissorsDiv.addEventListener('click', function(){
        game('Scissors');
    })
}

main()