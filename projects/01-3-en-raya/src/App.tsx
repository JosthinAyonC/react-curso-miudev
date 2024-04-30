import { useState } from "react";
import confetti from 'canvas-confetti';
import { TURNS } from "./environments/Constants";
import { checkWinner, checkEndGame } from "./logic/Board";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";
import { Turn } from "./components/Turn";


function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  // null es empate y X o O es el ganador
  const [winner, setWinner] = useState(null);

  const updateBoard = (index: number) => {
    // Que no se pueda modificar si ya hay un valor
    if (board[index] || winner) return;
    // Que el tablero no se pueda modificar si ya hay un valor
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Comprobar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
      setBoard(Array(9).fill(null));
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  return (
    <main className='board'>
      <h1>3 In Line</h1>
      <Board
        board={board}
        updateBoard={updateBoard}
        resetGame={resetGame}
      ></Board>

      <Turn
        turn={turn}
      ></Turn>

      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      >
      </WinnerModal>
    </main>
  )
}

export default App
