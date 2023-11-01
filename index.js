let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = " ";

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.getElementById('card-el');

function startGame() {
    renderGame();
}

function renderGame() {   
    cardEl.textContent ="Cards: ";

    for(let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

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

function newCard() {
    console.log("Drawing a new card from the deck!")
    
    let thirdCard = Math.floor(Math.random() * 10) + 2;
    
    sum += thirdCard;
    
    cards.push(thirdCard);
    console.log(cards);

    renderGame();
}



