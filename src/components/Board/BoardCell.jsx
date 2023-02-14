import React from 'react';
import styles from './Board.module.css';

function BoardCell({ cellIndex, val, markCell }) {
	function handleClick() {
		markCell(cellIndex);
	}
	return (
		<div className={styles['board__cell']} onClick={handleClick}>
			{val}
		</div>
	);
}

export default BoardCell;
