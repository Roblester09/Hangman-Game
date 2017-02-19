window.onload = function () {


    var word;              // Selected word
    var guess;             // Guess
    var guesses = [];      // Stored guesses
    var lives;             // Lives
    var counter;           // Count correct guesses
    var space;              // Number of spaces in word '-';


    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var buttons = function () {

        var myButtons = document.getElementById('buttons');
        var btn = document.createElement("button");

        for (i = 0; i < alphabet.length; i++) {
            btn.appendChild(document.createTextNode(alphabet[i]));
            myButtons.appendChild(btn);
            btn.setAttribute("class", "btn let-btn");
        }

    };


    // Create guesses ul

    var result = function () {
        var wordHolder = document.getElementById("hold");
        var correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    };



    // Get elements
    var showLives = document.getElementById("myLives");

    // Show lives

    var comments = function () {

        var para = document.createElement("p");
        var node = document.createTextNode("You have " + lives + " lives");
        var nodeOver = document.createTextNode("Game Over");
        para.appendChild(node);
        para.appendChild(nodeOver);
        showLives.appendChild(para);


        if (lives < 1) {
            showLives.appendChild(nodeOver);
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.appendChild("You Win!");
                //showLives.innerHTML = "You Win!";
            }
        }
    };



    // OnClick Function

    var check = function () {
        list.onclick = function () {
            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    };



    // Play

    var play = function () {

        var starWarsList = ["Luke Skywalker", "Han Solo", "Empire Strikes Back", "Chewie", "X-Wing", "Death Star", "Darth Vader", "Rey"];

        chosenWord = starWarsList[Math.floor(Math.random() * starWarsList.length)];
        word = chosenWord[Math.floor(Math.random() * chosenWord.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guesses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
    };

    play();



    // Reset

    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        play();
    }

};

