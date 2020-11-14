import React from 'react';

const ProfileDetail = (props) => {
	let { id } = props.match.params;
	let { edad } = props.match.params;
	let { heroinasArray } = props;
	let heroina = heroinasArray.filter(heroina => heroina.id === Number(id)).pop();

	return (
		<React.Fragment>
			<h3>{ heroina.nombre }</h3>
			<img src={`/images/${heroina.url}`} alt="" />
			{ edad && <p>Edad: {edad}</p>}
		</React.Fragment>
	)
}

export default ProfileDetail;