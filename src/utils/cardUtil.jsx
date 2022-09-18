export const Card = (props) => {
	return (
		<div className={`${props.sty}`} onClick={props.onClick}>
			<img src={props.path} />
			<h1>{props.name}</h1>
			inside card
		</div>
	);
};
