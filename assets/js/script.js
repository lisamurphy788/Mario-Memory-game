
const cards = document.querySelectorAll('.card');
var modal = document.getElementById("rulesModal");// Get the modal
var btn = document.getElementById("myBtn");// Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
var flipContainer = document.querySelector(".flips");

let hasFlippedCard = false;//if card was clicked already
let lockBoard = false;//lock board
let firstCard, secondCard; //cards match
let flips = 0;

//modal adapted from https://www.w3schools.com/howto/howto_css_modals.asp

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
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
   // timer();


    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first Click
        hasFlippedCard = true;
        firstCard = this;   
        return;
    }
        //second click
    secondCard = this
    checkForMatch();
}   

function checkForMatch () {
    //stay facing upwards 
    let ismatch = firstCard.dataset.image === secondCard.dataset.image;
    
    ismatch ? disableCards() : unflipCards();
    
     
}

function disableCards () {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    resetBoard();
    }, 1500);
}

function resetBoard () {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });

})();

cards.forEach(card => card.addEventListener('click', flipCard));
