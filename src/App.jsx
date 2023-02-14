import { useState, useEffect } from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import Info from './components/Info/Info';
import Board from './components/Board/Board';

const winPatterns = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],

	[0, 4, 8],
	[2, 4, 6],
];

const starterBoard = Array(9).fill('');

function App() {
	const [board, setBoard] = useState(starterBoard);
	const [marker, setMarker] = useState('X');
	const [scoreX, setScoreX] = useState(0);
	const [scoreO, setScoreO] = useState(0);
	const [result, setResult] = useState({ winnerSymbol: null, matchStatus: null });
	// console.log(board);

	useEffect(() => {
		checkWinner();
		changeMarker();
	}, [board]);

	function markCell(cellIndex) {
		if (result.matchStatus) return;
		setBoard(prevState => {
			return prevState.map((value, index) => {
				if (cellIndex === index && value === '') {
					return marker;
				}

				return value;
			});
		});
		// changeMarker();
	}

	function checkWinner() {
		winPatterns.forEach(pattern => {
			const [pos1, pos2, pos3] = pattern;

			if (board[pos1] === '' || board[pos2] === '' || board[pos3] === '') return;

			if (board[pos1] === board[pos2] && board[pos2] === board[pos3]) {
				setResult({ winnerSymbol: board[pos1], matchStatus: 'WON' });
				if (board[pos1] === 'X') {
					setScoreX(prevScoreX => prevScoreX + 1);
				} else {
					setScoreO(prevScoreO => prevScoreO + 1);
				}

				return;
			}

			if (board.includes('')) {
				return;
			} else {
				setResult({ winnerSymbol: null, matchStatus: 'DRAW' });
			}
		});
	}

	function changeMarker() {
		setMarker(prevMarker => {
			if (prevMarker === 'X') {
				return 'O';
			}

			return 'X';
		});
	}

	function restartGame() {
		setBoard(starterBoard);
		setResult({ winnerSymbol: null, matchStatus: null });
	}

	return (
		<div className="App">
			<PageHeader scoreX={scoreX} scoreO={scoreO} />

			<main className="main">
				<Info result={result} marker={marker} />

				<Board board={board} markCell={markCell} />

				<button className="restart-btn" onClick={restartGame}>
					New Game
				</button>
			</main>
		</div>
	);
}

export default App;
