import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import BoardCell from './components/BoardCell/BoardCell';

function App() {
	const starterBoard = Array(9).fill('');
	const [board, setBoard] = useState(starterBoard);
	console.log(board);

	return (
		<div className="App">
			{/* <h1>Tic Tac Toe</h1> */}
			<div className="board">
				<BoardCell />
				<BoardCell />
				<BoardCell />
				<BoardCell />
				<BoardCell />
				<BoardCell />
				<BoardCell />
				<BoardCell />
				<BoardCell />
			</div>
		</div>
	);
}

export default App;
