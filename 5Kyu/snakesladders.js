class SnakesLadders {
  constructor() {
    this.player1 = 0;
    this.player2 = 0;
    this.currentPlayer = 1;
    this.gameOver = false;
    this.board = {
      2: 38, 7: 14, 8: 31, 15: 26, 21: 42,
      28: 84, 36: 44, 51: 67, 71: 91, 78: 98,
      87: 94,
      16: 6, 46: 25, 49: 11, 62: 19,
      64: 60, 74: 53, 89: 68, 92: 88,
      95: 75, 99: 80
    };
  }