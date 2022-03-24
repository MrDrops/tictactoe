$('.tile').on('click', function() {   
    //tile buttons
    let tileId = this.id;
    $(this).toggleClass('tile-off').toggleClass('tile-on');
    this.disabled = true;
    game.move(tileId, game.player);
    $(this).css("background-image", `url(${game.image[game.player]})`);
    if (game.checkWin(game.player)) {
        $(':button').prop('disabled', true);
        endGame(game.player);
    } else if (game.checkDraw()) {
        addBanner();
    } else {
        game.changeTurn();
        whosTurn();
    }
});

const addBanner = function() {
    //create victory/tie banner
    let victor = game.player === 'x' ? 'Player 1' : 'Player 2'
    let endMsg = `Congratulations, ${victor} wins!`;
    if (game.checkDraw()) {
        endMsg = "It's a draw!"
    } 
    const bannerContent = `<h2 class="pop-msg"> ${endMsg} </h2>`;
    let btnY = '<button class="new-game-btn" onclick="replayBtn()">Yes</button>';
    let btnN = '<button class="new-game-btn" onclick="endGameBtn()">No</button>';
    let ynBtns = `<div class="yn-btns">${btnY} ${btnN}</div>`;
    let banner = $(`<div class="popup-banner"> ${bannerContent} <h3 class="replay">Play again? </h3> ${ynBtns}</div>`);
    $('body').append(banner);
};

const endBanner = function() {
    //end of game banner
    let msg = `Final score <br>Player 1 - Player 2 <br> ${game.score[0]} - ${game.score[1]}`;
    let endBanner = $(`<div class="end-banner"><h3 class="end-score">${msg} </h3></div>`);
    $('body').append(endBanner);
}

const updateScore = function(score) {
    $('#p1-score').text(score[0]);
    $('#p2-score').text(score[1]);
};

const whosTurn = function() {
    //change display for turn
    let who = game.player === 'x' ? 'Player 1' : 'Player 2';
    let msg = `${who}'s turn`;
    $('.text-display').text(msg);
}

const replayBtn = function() {
    //saves score if want to replay
    window.name = JSON.stringify(game.score);
    location.reload();
};

const endGameBtn = function() {
    //prompts end of game banner and reloads index page
    $('.popup-banner').remove();
    endBanner();
    setTimeout(()=> window.location.href = 'index.html', 3000);
}

const displayNames = function() {
    //not yet functional
    let names = game.players;
    $('#p1-name').text(names[0]);
    $('#p2-name').text(names[1]);
}

const endGame = function(player) {
    //end match
    game.updateScore(player);
    updateScore(game.score);
    addBanner();
}

const startGame = function() {
    whosTurn();
    if (window.name.length != 0) {
        game.score = JSON.parse(window.name);
        updateScore(game.score);
        window.name = '';
    } else {
        //checks window.name is clear
        //displayNames();
        console.log(window.name.length);
    }
};

startGame();