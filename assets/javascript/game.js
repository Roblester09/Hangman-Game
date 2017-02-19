/*
1. Create an array with a list of words
2. Choose a word from the array
3. Store the chosen word in a variable
3. Display the length of the word to the user
4. The correct_guesses is less than the length of the word
5. Prompt the User to guess a letter
6. If the guess is correct increment correct_guesses by 1
7. If the guess is incorrect increment incorrect_guesses by 1
8. If the incorrect_guesses is greater than 8 then
    - Display they lost the game ("Game Over")
    - Exit the game
9. If the correct_guesses is equal to the length of the word then
    - Display that they won ("You Won!")
 */



// Create an array with the alphabet
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Create an array with a list of words
//var wordBank = ["Return of the Jedi", "Empire Strikes Back", "Luke Skywalker", "Chewbacca", "Death Star", "Stormtrooper", "The Force Awakens", "The Resistance"];

// Create variables used throughout the script

var randomWord;         // Store the chosen word in a variable
var guess;              // Guess
var guesses = [ ];      // Stored guesses
var lives;         // Lives
var myChances;
var correct_guess;      // Count correct guesses
var space;
var counter;
var myButtons;
var letters;
var wordHolder;


//Create a button for each letter in the alphabet array
button = function () {
    myButtons = document.getElementById("buttons");

    for (i = 0; i < alphabet.length; i++) {
        letters = document.createElement("button");
        letters.setAttribute("class", "btn let-btn");
        check();
        letters.innerHTML = alphabet[i];
        myButtons.appendChild(letters);
    }
};


// Choose a word from the array


// Display the length of the word to the user
// The correct_guesses is less than the length of the word
result = function () {
    wordHolder = document.getElementById("hold");
    correct_guess = document.createElement("div");

    for (i = 0; i < randomWord.length; i++) {
        guess = document.createElement("p");
        guess.setAttribute("class", "my-word");

        if (randomWord[i] === "-") {
            guess.innerHTML = " ";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }

        guesses.push(guess);
        wordHolder.appendChild(correct_guess);
        correct_guess.appendChild(guess);
    }
};

var chanceHolder = document.getElementById("myLives");
myChances = document.createElement("p");

//Display the number of lives/chances the User has
chances = function () {
    myChances.innerHTML = "You have " + lives + " lives";

    if (lives < 1) {
        myChances.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            myChances.innerHTML = "You Win!";
        }
    }

    chanceHolder.appendChild(myChances);
};

check = function () {
    letters.onclick = function () {
        var guess = (this.innerHTML);
        this.onclick = null;
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guess) {
                guesses[i].innerHTML = guess;
                counter += 1;
            }
        }
        var j = (randomWord.indexOf(guess));
        if (j === -1) {
            lives -= 1;
            chances();
        } else {
            chances();
        }
    }
};

play = function () {

    var wordBank = ["RETURN OF THE JEDI", "EMPIRE STRIKES BACK", "LUKE SKYWALKER", "CHEWBACCA", "DEATH STAR", "STORMTROOPER", "THE FORCE AWAKENS", "THE RESISTANCE"];

    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    randomWord = randomWord.replace(/\s/g, "-");

    console.log(randomWord);
    button();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    chances();
};

play();

document.getElementById('reset').onclick = function() {
    correct_guess.parentNode.removeChild(correct_guess);
    letters.parentNode.removeChild(letters);
    play();
};


