function WorkExperience ({ workContent }) {
	let { subtitle, title, description } = workContent;
	return (
		<div className="testing">
			<h3>{subtitle}</h3>
			<h2>{title}</h2>
			{description ? <p>{description}</p> : <i className="fas fa-heart-broken"></i>}
		</div>
	)
}

export default WorkExperience;