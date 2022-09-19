import React, { useState } from 'react';
import { Card } from '../utils/cardUtil';
import { data } from '../assets/data';

export default function Main({ difArray, cardStyle, setCount, count, best, setBest }) {
	const [win, setWin] = useState([]);

	const onClick = (id) => {
		if (win.includes(id)) {
			setWin([]);
			return setCount(0);
		} else {
			setWin([...win, id]);
			setCount(count + 1);
		}
	};

	const CardDisplayArray = [];
	for (let i = 0; i < difArray.length; i++) {
		let cardReturn = data.filter((obj) => {
			return obj.id === difArray[i];
		});
		CardDisplayArray.push(<Card key={cardReturn[0].id} id={cardReturn[0].id} name={cardReturn[0].name} type={cardReturn[0].type} sty={cardStyle} path={cardReturn[0].path} onClick={() => onClick(cardReturn[0].id)} />);
	}

	return <div className="main">{CardDisplayArray}</div>;
}
