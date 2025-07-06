
const max = prompt("Enter the maximum number for the guessing game:");
const randomNumber = Math.floor(Math.random() * max) + 1;
console.log(randomNumber);

let guess = prompt(`Guess a number between 1 and ${max}:`);

while (true) {
    if (guess == "quit") {
        console.log("You have exited the game.");
        break;
    }
    else if (guess == randomNumber) {
        console.log("Congratulations! You've guessed the number correctly!");
        break;
    }
    else if (guess < randomNumber) {
        guess = prompt("Too low! Try again:");
    }
    else if (guess > randomNumber) {
        guess = prompt("Too high! Try again:");
    }
    else {
        guess = prompt("Invalid input. Please enter a valid number:");
    }

}

