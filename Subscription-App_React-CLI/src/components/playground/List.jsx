import React from 'react';

const List = (props) => {
	let data = props.dataList;
	return (
		<ul>
			{ data.map((item, idx) => <li key={idx}>{item}</li>) }
		</ul>
	)
}

export default List;