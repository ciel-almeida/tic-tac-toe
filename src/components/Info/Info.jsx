import React from 'react';
import styles from './Info.module.css';

function Info({ result, marker }) {
	let currentPlayer = '';
	if (!result.winnerSymbol && result.matchStatus !== 'DRAW') {
		currentPlayer = (
			<p>
				<span className={styles['info__player']}>{marker}</span> TURN
			</p>
		);
	}
	return (
		<div className={styles['info']}>
			{currentPlayer}
			<p>
				<span className={styles['info__player']}>{result.winnerSymbol}</span> {result.matchStatus}
			</p>
		</div>
	);
}

export default Info;
