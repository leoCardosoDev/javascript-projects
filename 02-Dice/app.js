/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

console.clear();
var scores, roundScore, activePlayer, gamePlaying;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
            // 1. Random number
        var dice = Math.floor(Math.random() * 6 ) + 1;
        
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            // Next Player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //  Add CUURENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Upadte the YI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check IF player won the game
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
            document.querySelector('.btn-hold').style.display = 'none';
            document.querySelector('.btn-roll').style.display = 'none';
        }else{
        // Next Player
            nextPlayer();
        }
    }
    
});

document.querySelector('.btn-new').addEventListener('click', newGame);

function nextPlayer(){
    roundScore = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //active
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
    //document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

function newGame(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');

    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
