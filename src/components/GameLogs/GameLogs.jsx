import React from 'react';

import { v4 as uuidv4 } from 'uuid';

const GameLogs = ({ logs }) => {
	return (
		<div>
			{logs.map((log) => (
				<div key={uuidv4()}>
					{log.player} clicked row {log.row} col {log.col}
				</div>
			))}
		</div>
	);
};

export default GameLogs;
