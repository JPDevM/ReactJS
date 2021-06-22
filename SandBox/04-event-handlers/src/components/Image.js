import React from 'react';

function Image (props) {
	const { url, imgAlt } = props;
	return (
		<img 
			src={`images/${url}`}
			alt={imgAlt}	
			className="rounded img-thumbnail" 
			width="150" 
		/>
	)
}

export default Image;