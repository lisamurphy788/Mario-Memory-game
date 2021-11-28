const cards = document.querySelectorAll('.card');
var modal = document.getElementById("rulesModal"); // Get the modal
var btn = document.getElementById("myBtn"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
var flipContainer = document.querySelector(".flips");
const gameOver = document.getElementById("gameOver")


const allMatch = 6;
let aMatch = 0
//let ismatch = 0;
//const timer = document.getElementsByClassName("timer")
//const gameOver = document.getElementById("game-over-modal")



let hasFlippedCard = false; //if card was clicked already
let lockBoard = false; //lock board
let firstCard, secondCard; //cards match
let flips = 0;


//modal adapted from https://www.w3schools.com/howto/howto_css_modals.asp

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
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

function checkForMatch() {
  //stay facing upwards 
  let ismatch = firstCard.dataset.image === secondCard.dataset.image;
  if (ismatch) aMatch += 1; // every matched card

  if (ismatch) disableCards()
  else unflipCards()

  if (aMatch === allMatch) win() //{ // all cards are matched
  //alert('You win');

  // }
}
// Show Win message 
function win() {
  gameOver.style.display = "block";
}

// Close out of win Modal 
const close = document.querySelector(".modal-win span");
close.onclick = () => document.getElementById("gameOver").style.display = "none";

function disableCards() {
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
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function reset ()
{
  setTimeout(() => {
  flippedCard = false;
  flips = 0;
  flipContainer.innerHTML = 0;
  [firstCard, secondCard] = [null, null];
  shuffle();
  aMatch = 0;
  cards.forEach(cardReset => cardReset.classList.remove('flip'));
  resetBoard();
  cards.forEach(card => card.addEventListener('click', flipCard));
}, 500);
}
  

//Timer
/*function timer() {
    var count = 120, timer = setInterval(function() {
      document.getElementById("count-down").innerHTML=count--;
      if(count === -2) {
      document.getElementById("count-down").innerHTML=0;
        clearInterval(timer);
        alert("Times Up!!!");
      } 
    }, 1000);
  }*/

  function shuffle() {
    cards.forEach(cards => {
        let randomPosition = Math.floor(Math.random() * 16);
        cards.style.order = randomPosition;
    });

}

cards.forEach(card => card.addEventListener('click', flipCard));