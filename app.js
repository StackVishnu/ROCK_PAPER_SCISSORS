const rockBtn = document.getElementById("rockbtn");
const paperBtn = document.getElementById("paperbtn");
const scissorBtn = document.getElementById("scissorbtn");
let playerSelection;
let compSelection;
const compImg = document.getElementById("comp-animation");
const playerImg = document.getElementById("player-animation");
const compDiv = compImg.parentElement.parentElement;
const playerDiv = playerImg.parentElement.parentElement;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const leftCard = document.querySelector(".left-card").children[0]; 
const rightCard = document.querySelector(".right-card").children[0];
const drawCard = document.querySelector(".modal");


function rockClickEvent(){
    playerSelection = "ROCK";

    compSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(compSelection);
    getWinner(playerSelection,compSelection);
}
function paperClickEvent(){
    playerSelection = "PAPER";

    compSelection = getComputerChoice();
    getWinner(playerSelection,compSelection);
}
function scissorClickEvent(){
    playerSelection = "SCISSOR";
 
    compSelection = getComputerChoice();
    getWinner(playerSelection,compSelection);
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
      return "ROCK";
    } else if (randomValue < 0.67) {
      return "PAPER";
    } else {
      return "SCISSOR";
    }
  };

  const getWinner = (pChoice,cChoice) => {

    displayHandler(pChoice,cChoice);
   const winner =  scoreHandler(pChoice,cChoice);
   if(winner === RESULT_COMPUTER_WINS){
   setTimeout(compShake,500);
   }
   else if(winner === RESULT_PLAYER_WINS){
    setTimeout(playerShake,500);
   }
   setTimeout(()=>{
    scoreUpdateHandler(winner);
   },600)
  };
  const displayHandler = (pChoice,cChoice) => {

     rightDisplayHandler(pChoice);
     leftDisplayHandler(cChoice);
      
      
  };
  const scoreHandler = (pChoice,cChoice) => {
    if(cChoice === pChoice ){
        drawDisplay();
        return RESULT_DRAW;
    }    
    else if((cChoice === "ROCK" && pChoice === "PAPER") ||
      (cChoice === "PAPER" && pChoice === "SCISSOR") ||
      (cChoice === "SCISSORS" && pChoice === "ROCK")){

        return RESULT_PLAYER_WINS;
      }
    else
        return RESULT_COMPUTER_WINS;
  };

  const drawDisplay = () => {
    drawCard.classList.remove("hidden");
    drawCard.classList.add("popup2");
    setTimeout(() => {
        drawCard.classList.add("hidden");
        drawCard.classList.remove("popup2");
    },500)
  };

const scoreUpdateHandler = (winner) =>{
    console.log(winner); 
    if (winner === RESULT_PLAYER_WINS){ 
        let a = rightCard.innerHTML; 
        a++;
        rightCard.innerHTML = a;
        
    }
    else if(winner === RESULT_COMPUTER_WINS){
        let b = leftCard.innerHTML;
        b++;
        leftCard.innerHTML = b;

    }
    else{
        return;
    }

};
const rightDisplayHandler = (pChoice) => {
    if (pChoice === "ROCK"){
        playerImg.src ="assets/Rock.png";

    }
    else if(pChoice ==="PAPER"){
        playerImg.src = "assets/Paper.png";
        
    }
    else if(pChoice ==="SCISSOR"){
        playerImg.src = "assets/Scissors.png";
        

    }
    animationHandlerPlayer();
}
const leftDisplayHandler = (cChoice) => {
    if (cChoice === "ROCK"){
        compImg.src ="assets/Rock.png";
        

    }
    else if(cChoice ==="PAPER"){
        compImg.src = "assets/Paper.png";
        
    }
    else if(cChoice ==="SCISSOR"){
        compImg.src = "assets/Scissors.png";
        
    }
    animationHandlerComp();
}
function animationHandlerComp() {
    compImg.classList.add("popup");
    setTimeout(() =>{
        compImg.classList.remove("popup");
    },1000
    ) ;
}
function animationHandlerPlayer() {
    playerImg.classList.add("popup");
    setTimeout(() =>{
        playerImg.classList.remove("popup")
    },1000
    ) ;
};

function playerShake(){
 playerDiv.classList.add("shake");
 setTimeout(() => {
    playerDiv.classList.remove("shake")
 },500);
}
function compShake(){
    compDiv.classList.add("shake");
 setTimeout(() => {
    compDiv.classList.remove("shake")
 },500);
}

rockBtn.addEventListener("click",() =>{
    rockClickEvent();
});
paperBtn.addEventListener("click",paperClickEvent);
scissorBtn.addEventListener("click",scissorClickEvent);
