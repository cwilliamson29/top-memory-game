import React, { useEffect } from 'react';
import { Diffi } from '../utils/diffUtil';

export default function Header({ count, best, setBest, setCardStyle, setDifArray }) {
	const changeDif = (dif) => {
		setDifArray([0]);
		Diffi(dif, setCardStyle, setDifArray);
	};
	useEffect(() => {
		changeDif('easy');
	}, []);

	return (
		<div className="header">
			<div className="headerLeft">
				<div className="headLeftText">Star Wars Memory Game</div>

				<div className="headLeadText">
					<button onClick={() => changeDif('easy')}>easy</button>
					<button onClick={() => changeDif('med')}>medium</button>
					<button onClick={() => changeDif('hard')}>hard</button>
					<button onClick={() => changeDif('insane')}>insane</button>
				</div>
			</div>
			<div className="headerRight">
				<div className="count">Score: {count}</div>
				<div className="count">Best Score: {best}</div>
			</div>
		</div>
	);
}
