const game = {
    player : 'x',
    opponent : 'person',
    players : [],
    victory3 : [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    victory4 : [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], 
            [12, 13, 14, 15], [0, 4, 8, 12], [1, 5, 9, 13], 
            [2, 6, 10, 14], [3, 7, 11, 15], [0, 5, 10, 15], [3, 6, 9, 12]],
    victory5 : [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], 
            [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 14, 17, 22], 
            [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [0, 6, 12, 18, 24], 
            [4, 8, 12, 16, 20]],
    board : [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    image : {
        'o': 'https://i.imgur.com/Mrn3Zee.png',
        'x': 'https://i.imgur.com/m6PwxL1.png'
    },
    score : [0, 0],

    changeOpp : function(opponent) {
        this.opponent = opponent;
    },
    boardSize : function(n) {
        const choice = [this.victory3, this.victory4, this.victory5]
        this.board = choice[n];
    },
    changeTurn : function() {
        this.player = this.player === 'x' ? 'o' : 'x';
    },
    checkWin : function(player) {
        return this.board.some(arr => {
                return arr.every(element => {
                    return element == player;
                });                
        });
    },
    checkDraw: function() {
        let tie = this.board.flat().filter((n)=> !isNaN(n));
        return tie.length === 0;
    },
    updateScore : function(player) {
        let score = this.score;
        this.score = this.player === 'x' ? [score[0]+1, score[1]] : [score[0], score[1]+1];
    },
    move: function(tile, player) {
        this.board = this.board.map(arr => {
                    return arr.map(num => {
                        return num == tile ? player : num;
                    });
        });
    }
};