import { useState } from 'react';

import './App.css';

import GameBoard from './components/GameBoard/GameBoard';

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

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

                <GameBoard />
			</div>
			<div>Logs</div>
		</>
	);
}

export default App;
