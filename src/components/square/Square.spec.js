import { render, screen } from '@testing-library/react';
import Square from './Square';
import userEvent from '@testing-library/user-event';

describe('<Square />', () => {
	let clickHandler = null;

	describe('renders the square correctly', () => {
		beforeEach(() => {
			render(<Square value="X" dataTestId="0" />);
		});

		it('the rendered square should be in the document', async () => {
			const renderedSquareElement = screen.getByTestId('square0');

			expect(renderedSquareElement).toBeInTheDocument();
		});

		it('the rendered square should contain only one button element', async () => {
			const expetedButtonLength = 1;

			const buttons = screen.getAllByRole('button');

			expect(buttons.length).toBe(expetedButtonLength);
		});

		it('the rendered square should display the recieved value prop correctly', async () => {
			const expectedTextValue = 'X';

			const renderedSquareElement = screen.getByTestId('square0');

			expect(renderedSquareElement).toHaveTextContent(expectedTextValue);
		});

    async function clickTheSquare() {
      clickHandler = jest.fn().mockName('handleClick');

      render(<Square dataTestId="1" onSquareClick={clickHandler} />);

      userEvent.click(screen.getByTestId('square1'));
    }

		it('the rendered square should be able to call the click handler', async () => {
      await clickTheSquare();

      expect(clickHandler).toHaveBeenCalled();
    });

	});
});
