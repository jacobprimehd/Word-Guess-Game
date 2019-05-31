console.log("Link In Progress....")

//Global Variables!
var word = "";
var words = ["issaquah","renton","bellevue","seattle","spokane","snoqualmie","tacoma","olympia"];
var realWord = "";
var arrayWord = [];
var guessWord = [];
var guess = [];
var guessesLeft = 5;
var wins = 0;
var loses = 0;
var spot = 0;
var letter = "";
var randomPicker = Math.floor(Math.random() * words.length);
var userKey = "";
newWord()


//Functions For Start Game! + End Game!
function newWord(){
    randomPicker = Math.floor(Math.random() * words.length);
    realWord = words[randomPicker];
    for (let i = 0; i < realWord.length; i++) {
        guessWord.push("_ ");
        arrayWord.push(realWord.substring(i, i+1));
    }
}


function restart(){
    spot = 0;
    guessesLeft = 5;
    arrayWord.length = 0;
    guess.length = 0;
    guessWord.length = 0;
    realWord = "";
    word ="";
    newWord();
}

function Lettercheck(userKey){
    var isLetter = false;
    for (let i = 0; i < arrayWord.length; i++) {
        if(userKey === arrayWord[i]){
            isLetter = true;
            spot = i;
            letter = userKey;
            replaceLetter();
        }
    }
    return isLetter;
}

function replaceLetter(){
    guessWord[spot] = letter;
    word = "";
    for (let i = 0; i < guessWord.length; i++) {
        word += guessWord[i];
        
    }
}






//Start Game Text Content + Linking Keystrokes + Functions
document.getElementById("winner").textContent = wins;
document.getElementById("loser").textContent = loses;
document.getElementById("city").textContent = guessWord;
document.getElementById("remaining").textContent = guessesLeft;


document.onkeyup = function(event){
    var letterInWord;
    userKey = event.key;
    guess.push(userKey);
    document.getElementById("test").textContent = guess;
    //If statements + For Loop
    letterInWord = Lettercheck(userKey);
    if(word === realWord){
        alert("Good Job!")
        wins++;
        restart();
    }
    if(letterInWord === false){
        guessesLeft--;
    }    
    if(guessesLeft === 0){
        alert("Failure!!!!! It was " + realWord);
        loses++;
        restart();
    }
    document.getElementById("winner").textContent = wins;
    document.getElementById("loser").textContent = loses;
    document.getElementById("city").textContent = guessWord;
    document.getElementById("remaining").textContent = guessesLeft;
}
