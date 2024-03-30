import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import GameBoard from './components/GameBoard/GameBoard';
import GameLogs from './components/GameLogs/GameLogs';

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

    const resetLogs = () => {
        setLogs(prevState => []);
    }

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
					changePlayerHandler={changePlayerHandler}
					logsHandler={logsHandler}
                    logsLength={logs.length}
                    resetLogs={resetLogs}
				/>
			</div>
			<GameLogs logs={logs} />
		</>
	);
}

export default App;
