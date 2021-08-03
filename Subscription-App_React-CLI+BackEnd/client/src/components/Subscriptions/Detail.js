import { useState, useEffect } from 'react';
// import swal from 'sweetalert';

const Detail = (props) => {
	const { id } = props.match.params; 
	const [subscription, setSubscription] = useState(null);

	useEffect(() => {
		const getSubscription = async () => {
			const data = await fetch(`http://localhost:5000/subscriptions/${id}`).then(res => res.json());
			setSubscription(data);
		}
		getSubscription();
	}, [id]);
	
	// swal("Hello world!")
	return (
		<h2>Detail - {id}</h2>
	)
}

export default Detail;