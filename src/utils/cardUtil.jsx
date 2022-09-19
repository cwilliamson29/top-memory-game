export const Card = (props) => {
	const styles = {
		backgroundImage: `url(${props.path})`,
		backgroundSize: 'cover',
		width: '100%',
		height: '100%',
		borderColor: `${props.type}`,
		color: `${props.type}`,
	};
	const border = {
		color: `${props.type}`,
		borderColor: `${props.type}`,
	};
	return (
		<div className={`${props.sty}`} style={border} onClick={props.onClick}>
			<div style={styles}>
				<div className="cardSpacer"></div>
				<div className="name" style={{ color: `${props.type}` }}>
					<div className="nameLabel">{props.name}</div>
				</div>
			</div>
		</div>
	);
};
