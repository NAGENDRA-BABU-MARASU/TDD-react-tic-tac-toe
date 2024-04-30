import { render, screen } from '@testing-library/react';
import Board from './Board';

describe('<Board />', () => {
	describe('renders the board correctly', () => {
		beforeEach(() => {
			render(<Board />);
		});

		it('rendered board should be in the document', async () => {
			const renderedBoardElement = screen.getByTestId('game-board');

			expect(renderedBoardElement).toBeInTheDocument();
		});

		it('renders board should contain 9 squares elements', async () => {
			const expectedSquareElementsLength = 9;

			const squareElements = screen.getAllByRole('button');

			expect(squareElements.length).toBe(expectedSquareElementsLength);
		});

		it('renders the status text', async () => {
			const statusElement = screen.getByTestId('status');

			expect(statusElement).toBeInTheDocument();
		});
	});
});
