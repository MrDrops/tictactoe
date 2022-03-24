const startBtn = function() {
    let p1 = $('#p1').val() ? $('#p1').val() : 'Player 1';
    let p2 = $('#p2').val() ? $('#p2').val() : 'Player 2';
    game.players[0] = p1;
    game.players[1] = p2;
    console.log(game.players);
    window.location.href = 'board.html';
}

// $( document ).ready(function() {
//     $('span').hide();
//     $('#tic').fadeIn(400, "swing", function() {
//         $('#tac').fadeIn(400, "swing", function() {
//             $('#toe').fadeIn(400, "swing");
//         });
//     });  
// });
