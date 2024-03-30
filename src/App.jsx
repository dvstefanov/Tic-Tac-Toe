import { useState } from 'react';

import GameBoard from './components/GameBoard/GameBoard';
import GameLogs from './components/GameLogs/GameLogs';
import Player from './components/Player/Player';

import './App.css';

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

	const onReset = () => {
		setLogs((prevState) => []);
		setActivePlayer((state) => 'X');
	};

	return (
		<>
			<header>
				<h1>Tic Tac Toe</h1>
			</header>
			<div id='board-wrapper'>
				<div id='players-wrapper'>
					<Player name='Player 1' symbol='X' />
					<Player name='Player 2' symbol='O' />
				</div>

				<GameBoard
					player={activePlayer}
					changePlayerHandler={changePlayerHandler}
					logsHandler={logsHandler}
					logsLength={logs.length}
					onReset={onReset}
				/>
			</div>
			<GameLogs logs={logs} />
		</>
	);
}

export default App;
