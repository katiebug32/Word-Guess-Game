

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
var wordRandom = holidayWords[Math.floor(Math.random() * holidayWords.length)]; //grabs random word from array//
console.log("selected word ", wordRandom);

//var userGuess = "n";
var resultWord = [];
var userGuess;
var remainingGuesses = 12;
var letterBank = [];
var userScore = 0;

//initializing result word to underscores
//console.log(resultWord);
for (var i = 0; i < wordRandom.length; i++) {
    resultWord[i] = "_";
}

//display result word in html
function updateHTML() {
    var resultWordHTML = resultWord.join(" ");
    //var lettersGuessedHTML = lettersGuessed.join(",");
    document.getElementById("currentWord").innerHTML = resultWordHTML;
    document.getElementById("guessCount").innerHTML = remainingGuesses;
    document.getElementById("lettersGuessed").innerHTML = letterBank;
}
updateHTML(); //need this here?

function gameStart(){
updateHTML();
remainingGuesses = 12;
//drop wordRandom function in here to choose a word?
letterBank = [];  //clear letterBank
}

document.onkeyup = function keyPressed(event) {
    userGuess = event.key.toLowerCase();
    for (var j = 0; j < wordRandom.length; j++) { //update result word based on //display result word in html user guess
        if ((wordRandom[j] == userGuess) && remainingGuesses >= 1) {
            resultWord[j] = userGuess;
        }
    }
    if (letterBank.indexOf(userGuess) != -1) {
        alert("You've already guessed that letter - try another letter!");
    }

    else {
        letterBank.push(userGuess);
    }
    
    console.log(resultWord);
    remainingGuesses--;
    updateHTML();
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
