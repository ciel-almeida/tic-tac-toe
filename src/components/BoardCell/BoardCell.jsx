import React from 'react';
import '../../App.css';

function BoardCell({ val, markCell }) {
	return (
		<div className="board__cell" onClick={markCell}>
			{val}
		</div>
	);
}

export default BoardCell;
