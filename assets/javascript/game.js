

//user presses key to start game
// function gameStart -- select guess wordRandom, set guesses to 12, clear letters guessed Array, 
//letter guess evaluation function
//game win/loss/or continue function
//if loss, then loop back to game start function.


//computer generates random word from word bank
//generated word is displayed as underscores in html
//display 12 turns available
//user guesses letter, displays to screen
// guessed letters update with newly guessed letter
//check guessed letter against wordRandom
//wrong guess decreases tries by one
//correct letter updates per index location(s)

//user score updates at end if necessary
// end game function will add one to score if necessary, then start startgame function


var holidayWords = ["santa", "cookies", "eggnog", "cocoa", "rudolph", "caroling", "snowflakes", "snowman", "ornaments", "mistletoe", "presents", "stockings", "reindeer", "candycane", "elves", "sleighbells"];
var wordRandom;


//var userGuess = "n";
var resultWord = [];
var userGuess;
var remainingGuesses = 12;
var letterBank = [];
var userScore = 0;

//initializing result word to underscores
//console.log(resultWord);

//display result word in html
function updateHTML() {
    var resultWordHTML = resultWord.join(" ");
    var letterBankHTML = letterBank.join(" ");
    document.getElementById("currentWord").innerHTML = resultWordHTML;
    document.getElementById("guessCount").innerHTML = remainingGuesses;
    document.getElementById("lettersGuessed").innerHTML = letterBankHTML;
    document.getElementById("winCount").innerHTML = userScore;

}


function gameStart() {
    document.getElementById("gameStartText").innerHTML = "Press Any Letter Key To Get Started!";
    resultWord = [];
    wordRandom = holidayWords[Math.floor(Math.random() * holidayWords.length)]; //grabs random word from array//
    console.log("selected word ", wordRandom);
    remainingGuesses = 12;
    letterBank = [];  //clear letterBank
    for (var i = 0; i < wordRandom.length; i++) {
        resultWord[i] = "_";
    }
    updateHTML();
}

gameStart();



document.onkeyup = function keyPressed(event) {
    userGuess = event.key.toLowerCase();
    document.getElementById("gameStartText").innerHTML = "";
    for (var j = 0; j < wordRandom.length; j++) {
        if ((wordRandom[j] == userGuess) && remainingGuesses >= 1) { //loop through to see if there are any matches in word
            resultWord[j] = userGuess; //update result word based on key pressed/guess
        } //QKeyEvent::text(). ??
    }
    if (wordRandom.indexOf(userGuess) === -1) {
        remainingGuesses--;
    }
    if (letterBank.indexOf(userGuess) !== -1) {
        alert("You've already guessed that letter - try another letter!");
    }
    else {
        letterBank.push(userGuess);
    }


    console.log(resultWord);

    updateHTML();

    if (resultWord.indexOf("_") === -1) {
        setTimeout(function () {
            alert("Yay! " + wordRandom + " is correct! You guessed it! Let's play again...");
            userScore++;
            gameStart();
        }, 200);
    }
    else if (resultWord.indexOf("_") !== -1 && remainingGuesses === 0) {
        alert("Bah Humbug! The Grinch stole your win! The correct word was " + wordRandom + ". Let's play again...")
        gameStart();
    }

    // var updatedResultWord = resultWord.join(" ");
    // document.getElementById("currentWord").innerHTML = updatedResultWord;
}












                   //Define blank array to store index values of letters guessed in word string
// if (wordRandom.indexOf(userGuess) != -1) { 
//     for (i = 0; i < wordRandom.length; i++) { 
//         if (wordRandom[i] == userGuess) {      //Check to see if current string index is letter guessed
//         indexes.//(i);
//         }
//     }


         //hide letters with underscores//
// if(userGuess == item in the string && guessCount>1)
//         function showLetter(){

//         }
//         function showLettersGuessed (){

//         }
//         function reduceGuessCount (){

//         }
//     else if (userGuess != item in the string) {
//         function reduceGuessCount (){

//         }
//     }

//     else if()
//     add point to win score

// }
