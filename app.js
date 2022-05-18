const result = document.getElementById("result");
const form = document.querySelector("form");
const guessBtn = document.getElementsByTagName("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const showGuess = document.getElementById("lastGuess");
const guessInput = document.getElementById("guess");


let randomNumber = Math.floor(Math.random() * 100) + 1;
let lastGuesses = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (guessInput.value === "" || lastGuesses.includes(guessInput.value)) {
        // give a mistake
        result.textContent = lastGuesses.includes(guessInput.value) ? "You made this prediction before..." : "Please enter a number between 0 and 100...";
        setTimeout(() => result.textContent = "", 2000)
    }else{
        // Go on
        lastGuesses.push(guessInput.value);
        printLastGuess();
        getDiff();
        guessInput.value = "";
    }
})

restartBtn.addEventListener("click", restartGame);

function getDiff(){
    // Compare randomNumber with prediction
    if (guessInput.value < randomNumber) {
        result.textContent = "Up";
        setTimeout(() => result.textContent = "", 2000)
    }else if(guessInput.value > randomNumber){
        result.textContent = "Down";
        setTimeout(() => result.textContent = "", 2000)
    }else{
        result.textContent = "Right Guess!";
        // setTimeout(() => result.textContent = "", 3000)
        restartBtn.style.display = "block";
        guessInput.value = disabled;
    }
}

function printLastGuess(){
    // print the latest predictions
    let index = lastGuesses.length -1;
    let li = document.createElement("li");
    li.textContent = lastGuesses[index];
    showGuess.appendChild(li);
}

function restartGame(){
    // restarting the game
    restartBtn.style.display = "none";
    result.textContent = "";
    showGuess.textContent = "";
    form.reset();
    randomNumber = Math.floor(Math.random() * 100) + 1;

}