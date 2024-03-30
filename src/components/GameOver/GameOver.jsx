import classes from './GameOver.module.css';

const GameOver = ({ winner, onReset }) => {
	return (
		<div className={classes.wrapper}>
			{winner !== undefined ? <p>{winner} won!!!</p> : <p>It's a draw!</p>}
			<button onClick={onReset}>Rematch</button>
		</div>
	);
};

export default GameOver;
