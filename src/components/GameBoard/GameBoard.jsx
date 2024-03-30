import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import classes from './GameBoard.module.css';

import GameOver from '../GameOver/GameOver';
import WINNING_COMBOS from '../../utils/combos';

const initialBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = ({
	player,
	logsHandler,
	changePlayerHandler,
	logsLength,
    resetLogs
}) => {
	const [board, setBoard] = useState([...initialBoard.map(arr => [...arr])]);

	let winner;
	let draw = false;
	for (const combo of WINNING_COMBOS) {
		const firstSymbol = board[combo[0].row][combo[0].col];
		const secondSymbol = board[combo[1].row][combo[1].col];
		const thirdSymbol = board[combo[2].row][combo[2].col];

		if (
			firstSymbol &&
			firstSymbol === secondSymbol &&
			firstSymbol === thirdSymbol
		) {
			winner = firstSymbol;
		} else if (logsLength === 9) {
			draw = true;
		}
	}

	const onSquareClickHandler = (player, rowIndex, colIndex) => {
		setBoard((prevState) => {
			const newState = [...prevState];
			newState[rowIndex][colIndex] = player;
			return newState;
		});

		changePlayerHandler();
		logsHandler(player, rowIndex, colIndex);
	};

	const onResetHandler = () => {
		setBoard((prevState) => [...initialBoard.map(arr => [...arr])]);
        winner = undefined;
        draw = false;
        resetLogs();
	};

	return (
		<div className={classes.wrapper}>
			{(winner || draw) && (
				<GameOver winner={winner} onReset={onResetHandler} />
			)}

			<div className={classes['game-board']}>
				{board.map((row, rowIndex) => {
					return (
						<ul key={uuidv4()} className={classes.row}>
							{row.map((_, colIndex) => (
								<li key={uuidv4()} className='column'>
									<button
										className={classes.btn}
										onClick={() =>
											onSquareClickHandler(player, rowIndex, colIndex)
										}
										disabled={board[rowIndex][colIndex] !== null}
									>
										{board[rowIndex][colIndex]}
									</button>
								</li>
							))}
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default GameBoard;
