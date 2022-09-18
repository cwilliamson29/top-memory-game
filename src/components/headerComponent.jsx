import React, { useState } from 'react';
import { Diffi } from '../utils/diffUtil';

export default function Header({ count, best, setBest, setCardStyle, setDifArray }) {
	const changeDif = (dif) => {
		setDifArray([0]);
		Diffi(dif, setCardStyle, setDifArray);
	};
	if (count > best) {
		setBest(count);
	}
	return (
		<div>
			<div className="headerLeft">
				Star Wars Memory Game<button onClick={() => changeDif('easy')}>easy</button>
				<button onClick={() => changeDif('med')}>medium</button>
				<button onClick={() => changeDif('hard')}>hard</button>
				<button onClick={() => changeDif('insane')}>insane</button>
			</div>
			<div className="headerRight">
				<div className="count">Score: {count}</div>
				<div className="count">Best Score: {best}</div>
			</div>
		</div>
	);
}
