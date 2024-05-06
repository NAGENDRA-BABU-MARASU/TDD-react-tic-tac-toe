import isGameDraw from './IsGameDraw'

describe('should tell whether the game is DRAW or not', () => {
  it('should return false when all squares are not filled yet', () => {
    const winner = null
    const initialSquaresLength = 9
    const filledSquaresCount = 5

    const isGameDrawn = isGameDraw(winner, filledSquaresCount, initialSquaresLength)

    expect(isGameDrawn).toBeFalsy()
  })

  it('should return true when winner is null and all squares got filled', () => {
    const winner = null
    const initialSquaresLength = 9
    const filledSquaresCount = 9

    const isGameDrawn = isGameDraw(winner, filledSquaresCount, initialSquaresLength)

    expect(isGameDrawn).toBeTruthy()
  })
})
