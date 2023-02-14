import React from 'react';
import styles from './PageHeader.module.css';

function PageHeader({ scoreX, scoreO }) {
	return (
		<header className={styles['page-header']}>
			<div className={styles['score']}>
				<p className="score__title">
					X : <span className={styles['score__points']}>{scoreX}</span>
				</p>
			</div>
			<h1 className={styles['page-header__title']}>Tic Tac Toe</h1>
			<div className={styles['score']}>
				<p className="score__title">
					O : <span className={styles['score__points']}>{scoreO}</span>
				</p>
			</div>
		</header>
	);
}

export default PageHeader;
