export default function Square({ dataTestId, value, onSquareClick }) {
	return (
		<button data-testid={`square${dataTestId}`} className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}
