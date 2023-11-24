const userScore = document.getElementById('userScore');
const pcScore = document.getElementById('pcScore');
const arr = ['userrock','userpaper','userscissors','pcpaper','pcrock','pcscissors','done','false','drawsymbol'];

//Defining random computer choice
let computerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    if(number === 1) {
        return 'scissors';
    }else if(number === 2) {
        return 'rock';
    }else {
        return 'paper';
    }
}
//Main game logic
function startGame(userChoice,pcchoice) {
    let result;
    let drawblock;
    imageHider();
    var millisecondsToWait = 1000;
    showOrHide("loading",true);
    setTimeout(function() {
        if(userChoice === 'scissors' && pcchoice === 'paper' || userChoice === 'rock' && pcchoice === 'scissors' || userChoice === 'paper' && pcchoice === 'rock') {
            result = true;
        }else if(userChoice === 'scissors' && pcchoice === 'rock' || userChoice === 'rock' && pcchoice === 'paper' || userChoice === 'paper' && pcchoice === 'scissors') {
            result = false;
        }else {
            result = true;
            drawblock = true;
        }
        showOrHide("user"+userChoice,true);
        showOrHide("pc"+pcchoice,true);
        drawblock ? showOrHide("drawsymbol",true) : (result ? showOrHide("done",true) : showOrHide("false",true));
        showOrHide("loading",false);
        return updateScore(result);
    }, millisecondsToWait);
};
//Displaying choosen elements , depends on boolean value(val = true or false)
let showOrHide = (img,val) => { val ? document.getElementById(img).style.display = "block" : document.getElementById(img).style.display = "none"};
//Update score at HTML game page
let updateScore = result => {return result ? userScore.innerText++ : pcScore.innerText++;}
//Hiding all the choosen images and results after start new game
var imageHider = () => {for(val of arr) {showOrHide(val,false);}}
