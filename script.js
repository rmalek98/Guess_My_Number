'use strict';


let secretNum = Math.trunc(Math.random() * 20) + 1;
 
let defaultScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function(){
    let guess =  Number(document.querySelector('.guess').value);
    //testing. console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 
        'Please Enter a Number!';
    } else if ( guess === secretNum){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (defaultScore > highScore){
            highScore = defaultScore;
            document.querySelector('.highscore').textContent = highScore;
        }


    } else if ( guess > secretNum)
        if ( defaultScore > 1){
        document.querySelector('.message').textContent = 'Too High!';
        defaultScore --;
        document.querySelector('.score').textContent = defaultScore;
    } else {
        document.querySelector('.message').textContent = "Soory! You lost the game!";
        document.querySelector('.score').textContent = 0;
    } else if ( guess < secretNum){
        if ( defaultScore > 1){
            document.querySelector('.message').textContent = 'Too Low!';
            defaultScore --;
            document.querySelector('.score').textContent = defaultScore;
        }else {
            document.querySelector('.message').textContent = "Soory! You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    } 
});  

document.querySelector('.again').addEventListener('click', function(){
    defaultScore = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = defaultScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


