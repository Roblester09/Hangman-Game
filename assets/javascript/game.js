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

window.onload = function () {

    // Create an array with the alphabet
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Create variables used throughout the script

    var randomWord;         // Store the chosen word in a variable
    var guess;              // Guess
    var guesses = [];       // Stored guesses
    var lives;              // Lives
    var myChances;
    var correct_guess;      // Count correct guesses
    var space;
    var counter;
    var myButtons;
    var letters;
    var wordHolder;

//Create a button for each letter in the alphabet array

    var button = function () {
        myButtons = document.getElementById("buttons");

        for (i = 0; i < alphabet.length; i++) {
            letters = document.createElement("button");
            letters.setAttribute("class", "btn let-btn");
            check();
            letters.innerHTML = alphabet[i];
            myButtons.appendChild(letters);
        }
    };


// Display the length of the word with lines for each letter to the user
// This also adds a space between words and adds a one to var space that's used later in the chances function.

    result = function () {
        wordHolder = document.getElementById("hold");
        correct_guess = document.createElement("div");

        for (i = 0; i < randomWord.length; i++) {
            guess = document.createElement("p");
            guess.setAttribute("class", "my-word");

            if (randomWord[i] === " ") {
                guess.innerHTML = " ";
                space += 1;
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
//If the lives counter is less than one then change the myChances to "game over"
//If the the counter and space variables add up to the length of the randomWord then display "you win"

    var chances = function () {
        myChances.innerHTML = "You have " + lives + " lives";

        if (lives < 1) {
            myChances.innerHTML = "Game Over! Refresh the page to play again!";
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === randomWord.length) {
                myChances.innerHTML = "You Win! Refresh the page to play again!";
            }
        }

        chanceHolder.appendChild(myChances);
    };

    var guessHolder = document.getElementById("guessed-letters");

//Check to see if the clicked button is equal to a character from the randomWord
//Check to see if the onkeyup (typed) letter is equal to a character from the randomWord
//If either option is wrong then decrease the chances function counter by one
//If either option is correct then display the current chances function as is and display the user guess or userInput
//Display every button and key typed under the guessHolder div

    var check = function () {
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

            guessHolder.append(guess + " ");
        };

        document.onkeyup = function () {

            var userInput = String.fromCharCode(event.keyCode).toUpperCase();

            for (var i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === userInput) {
                    guesses[i].innerHTML = userInput;
                    counter += 1;
                }
            }
            var j = (randomWord.indexOf(userInput));
            if (j === -1) {
                lives -= 1;
                chances();
            } else {
                chances();
            }

            guessHolder.append(userInput + " ");
        }
    };

//This function runs all of the above functions in a specific order.
//Chooses a random word from the word bacnk and replaces any spaces with a typed space.
//Logs the word in the console for testing
//Creates the buttons
//Runs the result
//Runs the chances

    var play = function () {

        var wordBank = ["RETURN OF THE JEDI", "EMPIRE STRIKES BACK", "LUKE SKYWALKER", "CHEWBACCA", "DEATH STAR", "STORMTROOPER", "THE FORCE AWAKENS", "THE RESISTANCE", "JYN ERSO", "IMPERIAL DEATH TROOPERS", "BODHI ROOK", "FINN", "CAPTAIN PHASMA", "ADMIRAL ACKBAR", "ANAKIN SKYWALKER", "SAW GERRERA", "DARTH VADER", "DARTH MAUL", "GREEDO", "HAN SOLO", "JAR JAR BINKS", "KYLO REN", "REY", "FINN", "POE DAMERON", "PRINCESS LEIA", "ALDERAAN", "CORUSCANT", "ENDOR", "HOTH", "JEDHA", "JEDI TEMPLE", "TATOOINE", "YODA", "THE FIRST ORDER", "THE LAST JEDI", "EWOK", "HUTT", "JAWA", "WOOKIE", "ROGUE ONE", "A NEW HOPE", "REVENGE OF THE SITH", "ATTACK OF THE CLONES", "THE PHANTOM MENACE"];

        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        randomWord = randomWord.replace(/\s/g, " ");

        console.log(randomWord);
        button();

        guesses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        chances();
    };

    play();

};




