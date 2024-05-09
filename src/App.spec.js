import React from 'react'
import { render, screen } from '@testing-library/react'
import Game from './components/game/Game'

describe('<App />', () => {
  it('redners the game component', () => {
    render(<Game />)

    expect(screen.getByTestId('game')).toBeInTheDocument()
  })
})
