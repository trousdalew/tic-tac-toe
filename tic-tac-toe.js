var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TicTacToe {
    constructor() {
      this.gameOver = 0;
      this.moves = 0;
      this.currentPlayer = 'X';
      this.board = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
      ];
    }

    checkWinner(player) {
      if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) {
          console.log(`Player ${player} wins!`);
          this.gameOver = player;
      }
      if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player) {
        console.log(`Player ${player} wins!`);
        this.gameOver = player;
      }
      if (this.board[0][0] === player && this.board[1][0] === player && this.board[2][0] === player) {
        console.log(`Player ${player} wins!`);
        this.gameOver = player;
      }
      if (this.board[0][1] === player && this.board[1][1] === player && this.board[2][1] === player) {
        console.log(`Player ${player} wins!`);
        this.gameOver = player;
      }
      if (this.board[0][2] === player && this.board[1][2] === player && this.board[2][2] === player) {
        console.log(`Player ${player} wins!`);
        this.gameOver = player;
      }
      this.board.forEach((row) => {
        if (row.every((entry) => {
          return entry === player;
        })) {
            console.log(`Player ${player} wins!`);
            this.gameOver = player;
        }
      });
    }

    changePlayer() {
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }
    }

    place(coord) {
        coord = coord.split(',');
        if (coord.length !== 2) {
            console.log('Invalid input');
        } else if (this.board[coord[0]][coord[1]]) {
            console.log('That spot is taken');
        } else {
            this.board[coord[0]][coord[1]] = this.currentPlayer;
            this.moves++;
            if (!this.checkWinner(this.currentPlayer) && this.moves === 9) {
                console.log('It\'s a tie!');
                this.gameOver = 3;
            }
        }
    }

    play() {
          this.board.forEach((row) => {
            console.log(row);
          });
          console.log('Player ' + this.currentPlayer + '\'s turn');
          rl.question('Make your move x,y \n', (coord) => {
            this.place(coord);
            if (!this.gameOver) {
                this.changePlayer();
                this.play();
            } else {
                console.log('Would you like to play again?');
            }
        });
    }

};

let game = new TicTacToe();
game.play();