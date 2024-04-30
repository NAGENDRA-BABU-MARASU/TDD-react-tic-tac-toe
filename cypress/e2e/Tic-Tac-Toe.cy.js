const appUrl = 'http://localhost:3000/';

describe('renders the game board correctly', () => {
	it('renders a board', () => {
		cy.visit(appUrl);

		cy.get('[data-testid="game-board"]').should('exist');
	});
});
