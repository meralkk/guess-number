
const txtNum = document.querySelector("#txtNum");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");
const txtResult = document.querySelector("#txtResult");
const credits = document.querySelector("#credits");


let randomNumber = 0;
const minRandomNumber = 1;
const maxRandomNumber = 80;
let totalShot = 10;

txtNum.setAttribute("placeholder", `Type number between ${minRandomNumber}-${maxRandomNumber}`)

const start = () => {
    randomNumber = getRandomNumber();
    txtNum.removeAttribute("disabled");
    txtNum.classList.remove("d-none");
    txtNum.value = "";
    txtNum.focus();
    btnGuess.classList.remove("d-none");
    btnStart.innerHTML = "Reset game";
    txtResult.classList.remove("d-none");
    txtResult.innerHTML = "";
    credits.innerHTML = "";
    credits.classList.remove("d-none");

    totalShot = 10;

}   

const reset = () => {
    btnGuess.classList.add("d-none");
    txtNum.setAttribute("disabled","true");
    btnStart.innerHTML = "Start game";
}


const guess = () => {
    const guessNumber = Number(txtNum.value);


    if(!guessNumber || isNaN(guessNumber) || guessNumber>maxRandomNumber || guessNumber<minRandomNumber){
        txtResult.innerHTML = `Please type a number between ${minRandomNumber}-${maxRandomNumber}`;
        return;
    }

    if(guessNumber === randomNumber){
        txtResult.innerHTML = "You win! 🥳🥳🥳";
        txtResult.classList.replace("text-danger", "text-success");
        txtNum.classList.add("d-none");
        credits.classList.add("d-none");

        reset();
    
    }
    else if(guessNumber > randomNumber){
        txtResult.innerHTML = `${guessNumber} is too high! Lower the number! 👎`;
    }
    else{
        txtResult.innerHTML = `${guessNumber} is too low! Raise the number! 👍`;
    }

    txtNum.focus();
    txtNum.value="";

    //10 deneme hakkı

    totalShot--;

    const trialNumber = Number(totalShot);

    if (totalShot > 3 ) {
        credits.innerHTML = `You have ${trialNumber} guesses left!`;

    } 

    else if (totalShot > 0 ) {
        credits.innerHTML = `Just ${trialNumber} shots! You can do it 😃`;

    } 
   
    else if (totalShot === 0 ){
        credits.innerHTML = `Sorry 😔 Your shots are over!`;
        txtNum.classList.add("d-none");
        credits.classList.add("d-inline");
        txtResult.classList.add("d-none");

        reset();
    }
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1) ) + minRandomNumber;
}

//Trigger with enter key
var input = document.querySelector("#txtNum");
input.addEventListener("keypress", function(event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        console.log(totalShot);


        guess();
    }
});


