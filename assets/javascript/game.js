//I wouldn't recommend changing these names. These id names match the layout if you change these names here make sure you change it on your html page as well.
var ids = ['hangmanWord','wrongGuesses','guessesLeft','winCounter','lossCounter'];

//finish declaring the rest of the variables we need. 
///**** Hint use the names in the ids array to finish the last 3 variables we need
var answerWord="";
var winCounter = 0;
var lossCounter= 0;
var guessesLeft = 9;
var wrongGuesses = 0;
var hangmanWord="";

//add missing 3 variables named

//Add how many names you want to this word bank. All names need to be lowercase.
var wordBank= ["ryan", "crystal", "sandra", "sam", "chris"]

//Valid characters we want to accept
var validLetters = ["a", 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Randomize and return
function randomize(arr){
    // [0,1,2,3,4].length = 5
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


function updateLetters(letter){
    for( var i=0; i<answerWord.length; i++){
        //the for loop runs through all of the words letters
        // now if a letter matches, the if (below) comes in to play
        if(letter === answerWord[i]) {
            hangmanWord[i] = answerWord[i];
        }
    }
}
//Explain what the updateLetters function is doing./
//if the letter guessed is in the answerWord array then it is equal to answerWordletter, 
//and the hangmanWord array is equal to answerWordletter
//so hangmanWord array = answerWord array




function updateGuesses(letter){
    wrongGuesses.push(letter);
    guessesLeft--;
}

function hideWord(arr) {
    //Please fill in what we want our array to be full of. You can add any symbol you want right now we have it full of *. This should be what the user sees when it is a brand new fresh game.
    return Array(arr.length).fill('_') 
}

//The key is the user's inputted key.
function validateInput(inputKey) {
    // Whenever a return is executed it breaks out of the function. 
    // So if validLetters.indexOf(key) === -1 is true then i would return false. This prevents the rest of the code inside this code block from running.

    // This condition Makes sure an a-z key is pressed.
    // if not it returns a value of -1 because -1 is not a valid value
    if(validLetters.indexOf(inputKey) === -1) return false;

    // This condition Makes sure key cant be guessed again.
    // makes sure that any indexOf value that is 0  and above (example 0=a, 1=b...) does not get used again.
    if(wrongGuesses.indexOf(inputKey) >= 0) return false;

    // This condition Makes sure hangman keys cant be pressed again
    // makes sure that any indexOf value that is 0  and above (example 0=a, 1=b...) does not get used again. 
    if(hangmanWord.indexOf(inputKey) >= 0) return false;
    return true;
}

function takeTurn(letter){
    if(answerWord.indexOf(letter)>=0){
        updateLetters(letter)
    } else{
        updateGuesses(letter)
    };

    //Add an if/else statement here.
    //if the letter is in the answerWord i should see a call to the updateLetters function

    //otherwise i should see a call to the the updateGuesses function

    // keep this line here
    print(ids);
}

function updateScore(){
    
    //Add an if/else statement here.
    //if the user wins i should see a call to updateWin
    if(hangmanWord.indexOf('_') === -1){
        updateWin()
    } 
    //or if the user loses i should see a call to the updateLoss
    else if(guessesLeft === 0){
        updateLoss();
    }
}

function updateWin() {
    winCounter++;
    alert("YOU WON! CONGRATS!")
    //add what happens if the user wins code here
    //Make a call to the startGame function here. 
    //This call is here to start the game once a player wins.
    startGame();
}

function updateLoss() {
    //add what happens if the user loses code here
    lossCounter++;
    alert("YOU LOST!!")
    //Make a call to the startGame function here.
    //This call is here to start the game once a player losses.
    startGame();
}
//This function takes an arr for an argument (we use it for our id array)
function print(arr) {
    arr.forEach(function (idName) {

        // If the idName variable is an array do this
        if(Array.isArray(window[idName])) {
            document.getElementById(idName).textContent = window[idName].join(' ')
        }

        // If the idName variable is any other type besides array do this
        else {
            document.getElementById(idName).textContent = window[idName];
        }
    });
}
//explain what the print function is doing.

function startGame() {
 /* 
    Add your board setup functions and or code here
    The wrongGuesses variable needs to be an array*/ 

 //The hangmanWord variable needs to be an array
   answerWord = randomize(wordBank);
   hangmanWord = hideWord(answerWord);
// The guessesLeft variable needs to be an Integer
    guessesLeft = 9;
    wrongGuesses = []
   
   
   
   
   
   
   
    print(ids)
}

//keyup event
//This is how our player is interacting with our game.
//This drives all the game mechanics.
document.addEventListener('keyup', function(event){
    if(validateInput(event.key)){
        takeTurn(event.key);
        updateScore();
        //make a call to the takeTurn Function
        
        //make a call to the updateScore function

    };
});

//This makes the first call (initial) call to start the game.
startGame();