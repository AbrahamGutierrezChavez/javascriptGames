const computerChoiceDisplay =  document.getElementById('computerChoice');
const userChoiceDisplay =  document.getElementById('userChoice');
const resultDisplay =  document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice; 

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>  {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
}));
