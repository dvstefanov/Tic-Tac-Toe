import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import classes from './GameBoard.module.css';

import WINNING_COMBOS from '../../utils/combos';

const initialBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = ({ player, logsHandler, changePlayerHandler }) => {
	const [board, setBoard] = useState(initialBoard);

	let winner;
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

	return (
		<>
			{winner && <div>Player {winner} won</div>}
			{!winner && (
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
			)}
		</>
	);
};

export default GameBoard;
