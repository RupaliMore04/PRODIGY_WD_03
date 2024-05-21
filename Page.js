// script.js
let currentPlayer = 'X';
let gameStatus = ['','','','','','','','',''];

function handleClick(index) {
    if (gameStatus[index] === '' && !checkWinner()) {
        gameStatus[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        } else if (!gameStatus.includes('')) {
            document.getElementById('status').innerText = `It's a tie!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let condition of winConditions) {
        if (gameStatus[condition[0]] !== '' &&
            gameStatus[condition[0]] === gameStatus[condition[1]] &&
            gameStatus[condition[1]] === gameStatus[condition[2]]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    gameStatus = ['','','','','','','','',''];
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    Array.from(document.getElementById('board').children).forEach(cell => cell.innerText = '');
}
