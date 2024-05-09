import React from 'react'
import { render, screen } from '@testing-library/react'
import Board from './Board'

describe('<Board />', () => {
  describe('renders the board correctly', () => {
    beforeEach(() => {
      render(<Board xIsNext={true} squares={Array(9).fill(null)}  />)
    })

    it('rendered board should contain 9 squares elements', async () => {
      const expectedSquareElementsLength = 9

      const squareElements = screen.getAllByRole('button')

      expect(squareElements.length).toBe(expectedSquareElementsLength)
    })

    it('renders the status text', async () => {
      const statusElement = screen.getByTestId('status')

      expect(statusElement).toBeInTheDocument()
    })
  })
})
