import React, { useState } from "react";
// IMPORTING REACT TO BE ABLE TO USE ALL COMPONENTS ACROSS APPLICATION

import { checkForWin } from "../Winners/Winners";
// IMPORT COMPONENTS AND USING THEM TO MAKE THE GAMEBOARD FUNCTIONAL

function getGameMessage(message) {
  let gameMessage;

  switch (message) {
    case 'red':
      gameMessage = 'Red Wins!'
      break;
    case 'black':
      gameMessage = 'Black Wins!'
      break;
    case 'draw':
      gameMessage = 'Tie! Play Again!'
      break;
    default:
      gameMessage = ''
  }
  // SWITCH STATEMENT THAT DISPLAYS WINNER OR TIE

  return gameMessage
  // RETURN GAME MESSAGE FROM SWITCH STATEMENT
}

// CREATING A BOARD FUNCTIONAL COMPONENT
function GameBoard() {
  const initialBoard = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ]

  const [board, setBoard] = useState(initialBoard);

  const [player, setPlayer] = useState("red")
  // USING REACT HOOKS TO SET STATE

  const winner = checkForWin(board);
  const gameMessage = getGameMessage(winner)
  // CONVERTING FUNCTIONAL COMPONENTS TO SINGLE VARIABLE VALUES

  function selectColumn(columnNumber) {
    if (winner) {
      // IF "CHECK-FOR-WIN" FUNCTION IS TRUE
      return;
      // RETURN WINNER
    }

    let gameBoard = [...board];

    for (let rowNumber = 5; rowNumber >= 0; rowNumber--) {
      if (!gameBoard[rowNumber][columnNumber]) {
        gameBoard[rowNumber][columnNumber] = player
        break
      }
      // IF GAME BOARD CELL IS NOT OCCUPIED THEN LET THE PLAYER CHOOSE THAT MOST BOTTOM CIRCLE.
    }

    setBoard(board);
    // CAN ACCESS CURRENT STATE WHEN MODIFIED BY USING CALLBACK FUNCTION INSIDE USESTATE SET FUNCTION

    setPlayer(prevPlayer => prevPlayer === "red" ? "black" : "red")
    // CONTINUE TO THE NEXT PLAYER TO PICK THEIR SQUARE USING `setPlayer` FUNCTION
  }

  // RESTART FUNCTION
  function restart() {
    console.log('Restart Clicked!')
    // CONSOLE.LOG "RESTART CLICKED"

    location. reload(false);
    // RELOAD CLICKED AND PAGE REFRESHED
  }

  // REACT EVENT LISTENER THAT ALLOWS EACH SQUARE TO BE CLICKED
  function renderSquare(rowNumber, columnNumber) {
    return (
      <button className="square" 
        onClick={() => selectColumn(rowNumber)} 
        style={{ backgroundColor: `${board[columnNumber][rowNumber]}` }}>
        {/* THIS IS THE EMPTY CIRCLE BEING CLICKED */}
      </button>
    );
  }

  return (
    <div>
      <div className="score">{gameMessage}</div>
      {/* GAME MESSAGE FOR KEEPING SCORE */}

      <table className="board">
        <thead className="score">
          {/* {score} */}
        </thead>
        <tbody>
          {/* EXTRA CREDIT: REPLACE WITH LOOP */}
          <tr className="board-row">
            <td>{renderSquare(0, 0)}</td>
            <td>{renderSquare(1, 0)}</td>
            <td>{renderSquare(2, 0)}</td>
            <td>{renderSquare(3, 0)}</td>
            <td>{renderSquare(4, 0)}</td>
            <td>{renderSquare(5, 0)}</td>
            <td>{renderSquare(6, 0)}</td>
          </tr>
          <tr className="board-row">
            <td>{renderSquare(0, 1)}</td>
            <td>{renderSquare(1, 1)}</td>
            <td>{renderSquare(2, 1)}</td>
            <td>{renderSquare(3, 1)}</td>
            <td>{renderSquare(4, 1)}</td>
            <td>{renderSquare(5, 1)}</td>
            <td>{renderSquare(6, 1)}</td>
          </tr>
          <tr className="board-row">
            <td>{renderSquare(0, 2)}</td>
            <td>{renderSquare(1, 2)}</td>
            <td>{renderSquare(2, 2)}</td>
            <td>{renderSquare(3, 2)}</td>
            <td>{renderSquare(4, 2)}</td>
            <td>{renderSquare(5, 2)}</td>
            <td>{renderSquare(6, 2)}</td>
          </tr>
          <tr className="board-row">
            <td>{renderSquare(0, 3)}</td>
            <td>{renderSquare(1, 3)}</td>
            <td>{renderSquare(2, 3)}</td>
            <td>{renderSquare(3, 3)}</td>
            <td>{renderSquare(4, 3)}</td>
            <td>{renderSquare(5, 3)}</td>
            <td>{renderSquare(6, 3)}</td>
          </tr>
          <tr className="board-row">
            <td>{renderSquare(0, 4)}</td>
            <td>{renderSquare(1, 4)}</td>
            <td>{renderSquare(2, 4)}</td>
            <td>{renderSquare(3, 4)}</td>
            <td>{renderSquare(4, 4)}</td>
            <td>{renderSquare(5, 4)}</td>
            <td>{renderSquare(6, 4)}</td>
          </tr>
          <tr className="board-row">
            <td>{renderSquare(0, 5)}</td>
            <td>{renderSquare(1, 5)}</td>
            <td>{renderSquare(2, 5)}</td>
            <td>{renderSquare(3, 5)}</td>
            <td>{renderSquare(4, 5)}</td>
            <td>{renderSquare(5, 5)}</td>
            <td>{renderSquare(6, 5)}</td>
          </tr>
        </tbody>
      </table>
      
      <button className="restart" onClick={restart}>
        Restart
      </button>
      {/* RESTARTS THE GAME OVER AT ANYTIME WITH OUR RESTART BUTTON */}
    </div>
  );
}

export default GameBoard;
// EXPORT ALLOWS THIS FUNCTION TO BE UTILIZED BY OTHER REACT COMPONENTS

