import React from 'react';

// Components
import Image from './Image';

function ImagesList ({ imgsArray, title }) {
	return (
		<React.Fragment>
			<h2>{title}</h2>
			{
				imgsArray.map((oneImg, i) => {
					return <Image key={i} url={oneImg.url} imgAlt={oneImg.alt} />
				})
			}
		</React.Fragment>
	)
}

export default ImagesList;