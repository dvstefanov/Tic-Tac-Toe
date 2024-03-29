import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import classes from './GameBoard.module.css';

const initialBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = ({ player, changePlayer, logsHandler }) => {
	const [board, setBoard] = useState(initialBoard);

	const onSquareClickHandler = (player, rowIndex, colIndex) => {
		setBoard((prevState) => {
			const newState = [...prevState];
			newState[rowIndex][colIndex] = player;
			return newState;
		});

        changePlayer();
        logsHandler(player, rowIndex, colIndex);
	};

	return (
		<div className={classes['game-board']}>
			{board.map((row, rowIndex) => {
				return (
					<ul key={uuidv4()} className={classes.row}>
						{row.map((_, colIndex) => (
							<li key={uuidv4()} className='column'>
								<button
									className={classes.btn}
									onClick={() => onSquareClickHandler(player, rowIndex, colIndex)}
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
	);
};

export default GameBoard;
