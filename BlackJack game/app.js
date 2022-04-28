var celeb=document.getElementById('canvas');
var message_change=document.getElementById('message');
var errorMessage = document.getElementsByClassName('er-message');
let cardMsg=document.getElementById('cards');
let sumMsg=document.getElementById('sum');
var replay = document.getElementById('replayBtn');
var error_click = new Audio('click_error.mp3');
var audio_click = new Audio('jump_effect.mp3');
var confetti_expl = new Audio('confetti.mp3');
var no_button= document.getElementById('no');
var yes_button=document.getElementById('yes');
var start=document.getElementById('startgame');

//initial 2 cards , randomised
let firstCard = Math.floor(Math.random()*20);
let secondCard = Math.floor(Math.random()*15);

// initialising the array of 2 elements
let cards= [firstCard,secondCard];
sum = firstCard + secondCard;

//message class removals
message_change.classList.remove('er-message');
message_change.classList.remove('win-message');
celeb.style.display = 'none';

replay.style.display='none';


//removing buttons yes no
function removeYesno(){
    yes_button.style.display='none';
    no_button.style.display='none';
}

//when  yes is clicked
function yesclick(){  
    audio_click.play();  
    newCard();    
    renderGame();
}

//when no is clicked
function noclick(){
    error_click.play();
    removeYesno();
    message_change.classList.add('er-message');
    message_change.innerText="Game OVER!";
    setTimeout(()=>{
        document.location.reload(); // refresh screen
    },3000)
}



// game function
function startgame(){
    audio_click.play();
    start.style.display='none'; // removing stargame button 
    renderGame();
}


// new card
function newCard(){
    let newcardel = Math.floor(Math.random()*15);
    sum += newcardel;
    cards.push(newcardel);
}


// render game function when any interaction is performed
function renderGame(){
    cardMsg.textContent = "Cards: ";
    for(let i=0 ; i < cards.length ; i++)
    {
        cardMsg.textContent += cards[i]+" ";
    }
    sumMsg.textContent = "Sum: "+sum;

    if(sum < 21){
        message_change.innerText="Do you want to draw a new card?";
        yes_button.style.display='inline-block';
        no_button.style.display ='inline-block';
    } 
    else if(sum === 21){
        removeYesno();
        message_change.classList.add('win-message');
        message_change.innerText="Congratulations! You've got a blackjack!!"
        replay.style.display="inline-block";
        celeb.style.display='block';
        confetti_expl.play();
    }   
    else{
           noclick();
    }
}

function replayGame(){
    setTimeout(()=>{
        document.location.reload();
    },1800)
}

removeYesno();
