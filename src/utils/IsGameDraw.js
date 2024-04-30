export default function isGameDraw(winner, filledSquaresCount, initialSquaresLength) {
	return winner === null && filledSquaresCount === initialSquaresLength;
}
