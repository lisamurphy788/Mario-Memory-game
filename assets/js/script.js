
const cards = document.querySelectorAll('.card');
//const rules = document.getElementById('rules')
//const modal = document.getElementById ('modal')
//const rulesBtn = document.getElementById('rulesBtn')
//const closeBtn = document.getElementById ('closeBtn')
//const timeContainer = document.querySelector('.timer')
//const rules = document.getElementById("modal"); // Get the button that opens the modal
//const btn = document.getElementById("myBtn");
//var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal


let hasFlippedCard = false;//if card was clicked already
let lockBoard = false;//lock board
let firstCard, secondCard; //cards match

// Get the modal
var modal = document.getElementById("rulesModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
//rulesBtn.addEventListener('click', showRules);
//closeBtn.addEventListener('click', closeRules);

////function showRules() {
    //modal.style.display = "block";

//}

//function closeRules() {
    //modal.style.display = "none";
//}
/*
 //timer
 let time;
 let minutes = 0;
 let seconds = 0;
 let timeStart = false;
 timeContainer.innerHTML =  minutes + " : " + seconds;
 
 function timer() {
     time = setInterval(function() {
         seconds++;
         if (seconds === 59) {
             minutes++;
             seconds = 0;
         }
         timeContainer.innerHTML = //"Time " +
          minutes + " : " + seconds;
     }, 1000);
 }
 
 function stopTime() {
     clearInterval(time);
 }
*/

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
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
*/

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
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
