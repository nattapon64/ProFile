import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Swal from 'sweetalert2';

function Performance() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index]) return;
    const newBoard = [...board];
    if (calculateWinner(board) || newBoard[index]) return;
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setIsPlayerTurn(false);
  };

  useEffect(() => {
    if (!isPlayerTurn) {
      const timer = setTimeout(() => {
        makeAiMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn]);

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      Swal.fire({
        title: 'Game Over',
        text: `Winner: ${winner}`,
        icon: 'success',
        confirmButtonText: 'Play Again'
      }).then(() => {
        resetGame();
      });
    } else if (checkDraw(board)) {
      Swal.fire({
        title: "It's a draw!",
        text: 'The game ended in a draw.',
        icon: 'info',
        confirmButtonText: 'Play Again'
      }).then(() => {
        resetGame();
      });
    }
  }, [board]);

  const makeAiMove = () => {
    const newBoard = [...board];
    if (calculateWinner(board) || !newBoard.includes(null)) return;
    const bestMove = findBestMove(newBoard);
    newBoard[bestMove] = 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setIsPlayerTurn(true);
  };

  const findBestMove = (board) => {
    let bestVal = -1000;
    let bestMove = -1;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'O';
        let moveVal = minimax(board, 0, false);
        board[i] = null;
        if (moveVal > bestVal) {
          bestMove = i;
          bestVal = moveVal;
        }
      }
    }
    return bestMove;
  };

  const minimax = (board, depth, isMaximizing) => {
    const score = evaluate(board);
    if (score === 10) return score - depth;
    if (score === -10) return score + depth;
    if (!board.includes(null)) return 0;
    if (isMaximizing) {
      let best = -1000;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          best = Math.max(best, minimax(board, depth + 1, !isMaximizing));
          board[i] = null;
        }
      }
      return best;
    } else {
      let best = 1000;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'X';
          best = Math.min(best, minimax(board, depth + 1, !isMaximizing));
          board[i] = null;
        }
      }
      return best;
    }
  };

  const evaluate = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (board[a] === 'O') return 10;
        else if (board[a] === 'X') return -10;
      }
    }
    return 0;
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const checkDraw = (board) => {
    return board.every((square) => square !== null);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsPlayerTurn(true);
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-24 h-24 text-3xl font-bold flex items-center justify-center bg-white border border-gray-300 shadow-md hover:bg-gray-200"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="mt-4 text-2xl font-semibold">{status}</div>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
}

export default Performance;
