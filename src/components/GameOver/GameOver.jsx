import classes from './GameOver.module.css';

const GameOver = ({ winner, onReset }) => {
	return (
		<div className={classes.wrapper}>
			{winner !== undefined ? <p className={classes.text}>{winner} won!!!</p> : <p className={classes.text}>It's a draw!</p>}
			<button onClick={onReset} className={classes.btn}>Rematch</button>
		</div>
	);
};

export default GameOver;
