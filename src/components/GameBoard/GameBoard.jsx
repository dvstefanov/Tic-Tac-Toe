import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import classes from './GameBoard.module.css';

const initialBoard = [
	[null, null, null],
	["X", null, null],
	[null, null, null],
];

const GameBoard = () => {
	const [board, setBoard] = useState(initialBoard);

	return (
		<div className={classes['game-board']}>
			{board.map((row, rowIndex) => {
				return (
					<ul key={uuidv4()} className={classes.row}>
						{row.map((_, colIndex) => (
                            <li key={uuidv4()} className='column'>
								<button className={classes.btn}>
									row-{rowIndex} col-{colIndex}
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
