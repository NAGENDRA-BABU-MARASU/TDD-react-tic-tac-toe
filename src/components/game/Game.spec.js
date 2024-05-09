import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Game from './Game'

describe('<Game />', () => {

  beforeEach(() => {
    render(<Game />)
  })

  it('game component should present in the document', async () => {
    const renderedGameElement = screen.getByTestId('game')

    expect(renderedGameElement).toBeInTheDocument()
  })

  it('game component should render the board component', async () => {
    const renderedBoardElement = screen.getByTestId('game-board')

    expect(renderedBoardElement).toBeInTheDocument()
  })

  it('game component should render the ordered list of moves', async () => {
    const gameInfoDiv = screen.getByTestId('game-info')
    const olElement = gameInfoDiv.querySelector('ol')

    expect(olElement).toBeInTheDocument()
  })

  it('moves ordered list should display the correct text initially', () => {
    const expectedTextContent = 'Go to game start'
    const gameInfoDiv = screen.getByTestId('game-info')
    const olElement = gameInfoDiv.querySelector('ol')

    expect(olElement).toHaveTextContent(expectedTextContent)
  })

  it('moves orderd list should display the move buttons correctly', () => {
    const expectedTextContet = 'Go to move #1'
    const gameInfoDiv = screen.getByTestId('game-info')
    const olElement = gameInfoDiv.querySelector('ol')

    fireEvent.click(screen.getByTestId('square0'))

    expect(olElement.querySelectorAll('li').length).toBe(2)
    expect(olElement).toHaveTextContent(expectedTextContet)
  })

})