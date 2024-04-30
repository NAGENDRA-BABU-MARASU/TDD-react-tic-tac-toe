import calculateWinner from './CalculateWinner';

describe('the calculateWinner function should work correctly', () => {
	it('should return correct winner for X', () => {
		const expectedWinner = 'X';
		const squares = ['X', 'X', 'X', null, null, null, null, null, null];
		const actualWinner = calculateWinner(squares);

		expect(actualWinner).toBe(expectedWinner);
	});

  it('should return correct winner for O', () => {
		const expectedWinner = 'O';
		const squares = ['X', 'O', 'X', null, 'O', null, null, 'O', null];
		const actualWinner = calculateWinner(squares);

		expect(actualWinner).toBe(expectedWinner);
	});

  it('should return null when there is no winner', () => {
    const squares = ['X', 'X', null , null, null, null, null, null, null];
    const actualWinner = calculateWinner(squares);

    expect(actualWinner).toBeNull();
  })
});
