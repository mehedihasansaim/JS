let randomNumber;
let max;

function startGame() {
    max = parseInt(document.getElementById("max").value);
    if (!max || max <= 1) {
        alert("Please enter a valid number greater than 1.");
        return;
    }
    randomNumber = Math.floor(Math.random() * max) + 1;
    document.getElementById("range").innerText = `1 and ${max}`;
    document.getElementById("setupSection").style.display = "none";
    document.getElementById("guessSection").style.display = "block";
    document.getElementById("message").innerText = "";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("restartBtn").style.display = "none";
}

function makeGuess() {
    const guess = document.getElementById("userGuess").value.trim();
    if (guess.toLowerCase() === "quit") {
        exitGame();
        return;
    }

    const guessNumber = parseInt(guess);

    if (isNaN(guessNumber)) {
        document.getElementById("message").innerText = "❌ Please enter a valid number.";
    } else if (guessNumber < randomNumber) {
        document.getElementById("message").innerText = "🔻 Too low! Try again.";
    } else if (guessNumber > randomNumber) {
        document.getElementById("message").innerText = "🔺 Too high! Try again.";
    } else {
        document.getElementById("message").innerText = "";
        document.getElementById("guessSection").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("restartBtn").style.display = "inline-block";
    }

    document.getElementById("userGuess").value = "";
}

function exitGame() {
    document.getElementById("message").innerText = "🚪 Game exited.";
    document.getElementById("guessSection").style.display = "none";
    document.getElementById("restartBtn").style.display = "inline-block";
}

function restartGame() {
    document.getElementById("setupSection").style.display = "block";
    document.getElementById("guessSection").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("restartBtn").style.display = "none";
    document.getElementById("max").value = "";
}