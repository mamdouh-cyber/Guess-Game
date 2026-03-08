// The Variables

const theNumber = Math.floor(Math.random() * 100) + 1;
const theGuessNumber = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');
let Lose = document.getElementById('lose');
const Guesses = document.getElementById('guessesNumber');
const resetBTN = document.getElementById('resetBtn');
let Guess = 10;

// The Functions

function BiggerOrSmaller (number) {
    if (Number(number) === theNumber) {
        result.innerHTML = "";
        result2.innerHTML = `Congratulations! You guessed the number in ${Guess} Guess/es !`;
        guessButton.style.visibility = 'hidden';
        resetBTN.style.visibility = 'visible';
    } else if (number === "") {
        result2.innerHTML = "";
        result.innerHTML = "Guess The Number And Write It First.";
    } else if (Number(number) < theNumber) {
        result2.innerHTML = "";
        result.innerHTML = "low!";
    } else if (Number(number) > theNumber) {
        if (Number(number) > 100) {
            alert ("Write It Between 1 And 100.");
        } else {
            result2.innerHTML = "";
            result.innerHTML = "high!";
        }
    }
}

function TheGuessesNumber () {
    if (Guess !== 1) {
        if (theGuessNumber.value <= 100) {
            Guesses.innerHTML = Guess - 1;
            Guess--;
        }
    } else {
        Guesses.innerHTML = 0;
        result.innerHTML = "";
        result2.innerHTML = "";
        Lose.innerHTML = "Sorry You Lose.";
        guessButton.style.visibility = 'hidden';
        resetBTN.style.visibility = 'visible';
    }
}

// The Clicker Listeners

guessButton.addEventListener('click', () => {
    const guess = theGuessNumber.value;
    BiggerOrSmaller(guess);
    TheGuessesNumber();
});

resetBTN.addEventListener('click', () => {
    location.reload();
});