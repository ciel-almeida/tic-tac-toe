import React from 'react';
import BoardCell from './BoardCell';
import styles from './Board.module.css';

function Board({ board, markCell }) {
	return (
		<div className={styles['board']}>
			{board.map((boardValue, index) => {
				return <BoardCell key={index} cellIndex={index} val={boardValue} markCell={markCell} />;
			})}
		</div>
	);
}

export default Board;
