import React from 'react'
import { useState } from 'react'
import Square from '../square/Square'
import calculateWinner from '../../utils/CalculateWinner'
import isGameDraw from '../../utils/IsGameDraw'

export default function Board() {
  const squaresLength = 9
  const playerOneTurnValue = 'X'
  const playerTwoTurnValue = 'O'
  const initialSquares = Array(squaresLength).fill(null)

  const [squares, setSquares] = useState(initialSquares)
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const nextSquares = [...squares]
    if (xIsNext) {
      nextSquares[i] = playerOneTurnValue
    } else {
      nextSquares[i] = playerTwoTurnValue
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)
  let status
  const filledSquaresCount = squares.filter((square) => square !== null).length

  if (isGameDraw(winner, filledSquaresCount, squaresLength)) {
    status = 'DRAW !'
  } else if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? playerOneTurnValue : playerTwoTurnValue)
  }

  return (
    <div data-testid="game-board">
      <div data-testid="status" className="status">
        {status}
      </div>
      <div className="board-row">
        <Square dataTestId="0" value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square dataTestId="1" value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square dataTestId="2" value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square dataTestId="3" value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square dataTestId="4" value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square dataTestId="5" value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square dataTestId="6" value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square dataTestId="7" value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square dataTestId="8" value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  )
}
