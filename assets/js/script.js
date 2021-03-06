/*jshint esversion: 6 */
const cards = document.querySelectorAll(".card");
var modal = document.getElementById("rulesModal"); // Get the modal
var btn = document.getElementById("myBtn"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
var flipContainer = document.querySelector(".flips"); // flips 
const gameOver = document.getElementById("gameOver"); // call the win modal/game over modal

const allMatch = 6; // Shows the total number of pairs
let aMatch = 0; // cards match

let hasFlippedCard = false; //if card was clicked already
let lockBoard = false; //lock board
let firstCard, secondCard; //cards match
let flips = 0;

//modal adapted from https://www.w3schools.com/howto/howto_css_modals.asp

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


/* Adapted from  https://marina-ferreira.github.io/tutorials/js/memory-game/ 
*/

//Flips

flips = 0;
flipContainer.innerHtml = 0;

function addFlip() {
    flips++;
    flipContainer.innerHTML = flips;
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    addFlip();

    this.classList.add("flip");

    if (!hasFlippedCard) {
        //first Click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    //second click
    secondCard = this;
    checkForMatch();
}
 
 /*
 Adapted from https://marina-ferreira.github.io/tutorials/js/memory-game/ 
 */

// Checking for a Match

function checkForMatch() {
    //stay facing upwards
    let ismatch = firstCard.dataset.image === secondCard.dataset.image;
    if (ismatch) aMatch += 1; // increase every matched card

    if (ismatch) disableCards();
    else unflipCards();

    if (aMatch === allMatch) win();
}

// Show Win message

function win() {
    gameOver.style.display = "block";

// show flips on win message

    document.getElementById("finalFlip").innerHTML = flips;
}

// Close out of win Modal

const close = document.querySelector(".modal-win span");
close.onclick = () => (document.getElementById("gameOver").style.display = "none");

// matched cards will be disabled for clicks once they are fliped

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

// board is locked until cards are back 

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1000);
}

// Reset board

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Play Again Reset

function reset() {
    setTimeout(() => {
        hasFlippedCard = false;
        flips = 0;
        flipContainer.innerHTML = 0;
        [firstCard, secondCard] = [null, null];
        shuffle();
        aMatch = 0;
        cards.forEach((cardReset) => cardReset.classList.remove("flip"));
        resetBoard();
        cards.forEach((card) => card.addEventListener("click", flipCard));
    }, 500);
}

// Shuffle

function shuffle() {
    cards.forEach((cards) => {
        let randomPosition = Math.floor(Math.random() * 12);
        cards.style.order = randomPosition;
    });
}

// Click to flip card

cards.forEach((card) => card.addEventListener("click", flipCard));