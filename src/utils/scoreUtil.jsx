export function BestScore(setBest, best, count) {
	if (count > best) {
		setBest(count);
	}
}

export function Score(setCount, count, win, setWin, id) {
	if (win.includes(id)) {
		setWin([]);
		return setCount(0);
	} else {
		setWin([...win, id]);
		setCount(count + 1);
	}
}
