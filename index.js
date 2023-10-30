let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = " ";

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.getElementById('card-el');
console.log(cardEl)

function startGame() {
    cardEl.textContent ="Cards: " + firstCard + " and " + secondCard;
    sumEl.textContent = 'Sum: ' + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card? ";
    }
    else if(sum === 21){
        message = "You've got Blackjack! ";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game! ";
        isAlive = false;
    }

    messageEl.textContent = message;
}

startGame();


