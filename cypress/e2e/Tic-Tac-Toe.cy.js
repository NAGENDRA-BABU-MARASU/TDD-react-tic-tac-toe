const appUrl = 'http://localhost:3000/';

describe('renders the game board correctly', () => {
	it('renders a board', () => {
		cy.visit(appUrl);

		cy.get('[data-testid="game-board"]').should('exist');
	});

	it('the rendered board should contain 9 squares components', () => {
		const expectedSquaresCount = 9;

		cy.visit(appUrl);

		cy.get('.square').should('have.length', expectedSquaresCount);
	});

	it('the square element fills with appropriate letter when clicked', () => {
		const expectedTextValue = 'X';

		cy.visit(appUrl);

		const squareElement = cy.get('[data-testid="square0"]');

		squareElement.click();

		squareElement.should('have.text', expectedTextValue);
	});
});

describe('plays the game correctly', () => {
	it('the game should alternate between X and O after each turn', () => {
		const expectedSquareOneValue = 'X';
		const expectedSquareTwoValue = 'O';
		const expectedSquareThreeValue = 'X';

		cy.visit(appUrl);

		cy.get('[data-testid="square0"]').click();
		cy.get('[data-testid="square1"]').click();
		cy.get('[data-testid="square2"]').click();

		cy.get('[data-testid="square0"]').should('have.text', expectedSquareOneValue);

		cy.get('[data-testid="square1"]').should('have.text', expectedSquareTwoValue);

		cy.get('[data-testid="square2"]').should('have.text', expectedSquareThreeValue);

		// not working if we store multiple elements in a single test !!!
		// const squareElementOne = cy.get('[data-testid="square0"]');
		// const squareElementTwo = cy.get('[data-testid="square1"]');
		// const squareElementThree = cy.get('[data-testid="square2"]');

		// squareElementOne.click();
		// squareElementOne.should('have.text', expectedSquareOneValue);

		// squareElementTwo.click();
		// squareElementTwo.should('have.text', expectedSquareTwoValue);

		// squareElementThree.click();
		// squareElementThree.should('have.text', expectedSquareThreeValue);
	});

	it('already clicked square cannot be clicked again', () => {
		const expectedTextValue = 'X';

		cy.visit(appUrl);

		const squareElement = cy.get('[data-testid="square0"]');

		squareElement.click();
		squareElement.should('have.text', expectedTextValue);

		squareElement.click();
		squareElement.should('have.text', expectedTextValue);
	});

	it('the game should display the status correctly when a player not won yet', () => {
		const expectedPlayerOneStatusValue = 'Next player: X';
		const expectedPlayerTwoStatusValue = 'Next player: O';

		cy.visit(appUrl);

		cy.get('[data-testid="status"]').should('have.text', expectedPlayerOneStatusValue);

		cy.get('[data-testid="square0"]').click();
		cy.get('[data-testid="status"]').should('have.text', expectedPlayerTwoStatusValue);

		cy.get('[data-testid="square1"]').click();
		cy.get('[data-testid="status"]').should('have.text', expectedPlayerOneStatusValue);
	});

	it('the game should declare the winner correctly when a player won the game', () => {
		const expectedStatusText = 'Winner: X';

		cy.visit(appUrl);

		// player 1 turn
		cy.get('[data-testid="square0"]').click();

		// player 2 turn
		cy.get('[data-testid="square2"]').click();

		// player 1 turn
		cy.get('[data-testid="square4"]').click();

		// player 2 turn
		cy.get('[data-testid="square7"]').click();

		// player 1 turn
		cy.get('[data-testid="square8"]').click();

		cy.get('[data-testid="status"]').should('have.text', expectedStatusText);
	});

	it('the game should draw when there are no squares availabe', () => {
		const expectedStatusText = 'DRAW !';

		cy.visit(appUrl);

		cy.get('[data-testid="square0"]').click(); // X
		cy.get('[data-testid="square1"]').click(); // O
		cy.get('[data-testid="square2"]').click(); // X
		cy.get('[data-testid="square3"]').click(); // O
		cy.get('[data-testid="square5"]').click(); // X
		cy.get('[data-testid="square4"]').click(); // O
		cy.get('[data-testid="square6"]').click(); // X
		cy.get('[data-testid="square8"]').click(); // O
		cy.get('[data-testid="square7"]').click(); // X

		cy.get('[data-testid="status"]').should('have.text', expectedStatusText);
	});
});
