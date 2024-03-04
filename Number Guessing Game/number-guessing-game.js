function runGame() {
    let guessString = "";
    let guessNumber = 0;
    let correct = false;

    const target = Math.floor(Math.random() * 100) + 1;
    let numTries = 0;

    do {
        guessString = prompt(
            "Embark on a mystery adventure! I'm thinking of a secret number " +
            "from 1 to 100. Can you uncover it?\n\nWhat is the number?"
        );
        numTries++;

        if (guessString === null) {
            return;
        }

        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
    } while (!correct);
    
    alert(`Wow, you nailed it in just ${numTries} tries! Were you cheating or are you just that good? Either way, hats off to your guesswork wizardry. Well done!`);
}

function checkGuess(guessNumber, target) {
    let correct = false;
    let targetNumber = target - guessNumber;
    if (isNaN(guessNumber)) {
        alert(
            `Whoa, a number from another dimension, huh? Unfortunately, our system only understands boring old Earth numbers. Try again, and let's keep the alien numerals for another day!`
        );
    } else if (guessNumber < 1 || guessNumber > 100) {
        alert(
            `Your number just tried to leapfrog from 1 to 100 and ended up in a galaxy far, far away. Let's bring it back to Earth, shall we? Try a number that's less interstellar!`
        );
    } else if (guessNumber < target) {
        alert(
            `Your guess just dipped its toes in the kiddie pool, but we're swimming in the ocean here! Aim higher—think whale, not minnow.`
        );
    } else {
        correct = true;
    }

    //Warm or Cold
    if (targetNumber === 0) {
        return;
    }
    else if (targetNumber < 15 && targetNumber > 0) {
        alert("Sizzling! You're on fire, almost there!");
    } else if (targetNumber > 15) {
        alert("Brrr! Getting frosty, try warming up!");
    }

    return correct;
}
