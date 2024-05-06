import React from 'react'
import { render, screen } from '@testing-library/react'
import Board from './components/board/Board'

describe('<App />', () => {
  it('redners the board component', () => {
    render(<Board />)

    expect(screen.getByTestId('game-board')).toBeInTheDocument()
  })
})
