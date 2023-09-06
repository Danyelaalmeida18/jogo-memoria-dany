const card1 = document.querySelector('.card1');
const card14 = document.querySelector('.card14');

let isCard1Flipped = false;
let isCard14Flipped = false;

card1.addEventListener('click', function(){
    if (!isCard1Flipped) {
      isCard1Flipped = true;
      checkIfCardsMatch();
    }
  });

card14.addEventListener('click', function(){
    if (!isCard14Flipped) {
      isCard14Flipped = true;
      checkIfCardsMatch();
    }
  });

  function checkIfCardsMatch() {
    if (isCard1Flipped && isCard14Flipped) {
      if (card1.dataset.cardValue === card14.dataset.cardValue) {
        launchConfetti();
      }
    }
  }
  function launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

