const computerChoiceDisplay =  document.getElementById('computerChoice');
const userChoiceDisplay =  document.getElementById('userChoice');
const resultDisplay =  document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice; 

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>  {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice()
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)  +1 //!possibleChoices.length;
    console.log('████ // file: app.js:17 // generateComputerChoice // randomNumber', randomNumber);
    

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}