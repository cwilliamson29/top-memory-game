export function Diffi(dif, setCardStyle, setDifArray) {
	if (dif === 'easy') {
		setCardStyle('card1');
		setDifArray([1, 2, 3, 4]);
	} else if (dif === 'med') {
		setCardStyle('card2');
		setDifArray([1, 2, 3, 4, 5, 6, 7, 8]);
	} else if (dif === 'hard') {
		setCardStyle('card3');
		setDifArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
	} else if (dif === 'insane') {
		setCardStyle('card4');
		setDifArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]);
	}
}
