import { useState } from 'react';

import './App.css';

import GameBoard from './components/GameBoard/GameBoard';

function App() {
	const [activePlayer, setActivePlayer] = useState('X');
	const [logs, setLogs] = useState([]);

	const changePlayerHandler = () => {
		setActivePlayer((state) => (state === 'X' ? 'O' : 'X'));
	};

	const logsHandler = (player, rowIndex, colIndex) => {
		setLogs((prevState) => {
			const newState = [...prevState];
			newState.push({ player: player, row: rowIndex, col: colIndex });
			return newState;
		});
	};

	return (
		<>
			<header>
				<h1>Tic Tac Toe</h1>
			</header>
			<div id='board-wrapper'>
				<div id='players-wrapper'>
					<div>Player X</div>
					<div>Player O</div>
				</div>

				<GameBoard
					player={activePlayer}
					changePlayer={changePlayerHandler}
					logsHandler={logsHandler}
				/>
			</div>
			<div className='logs'>
				{logs.map((log) => (
					<div>
						{log.player} clicked row {log.row} col {log.col}
					</div>
				))}
			</div>
		</>
	);
}

export default App;
