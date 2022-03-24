let gameObj = {
    move2 : function(tile, player) {
        let len = this.board.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (tile == this.board[i][j]) {
                    this.board[i][j] = player;
                };
            };
        };
    },
}

