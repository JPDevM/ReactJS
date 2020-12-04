import ServicesDB from '../data/services.json'

const Services = () => {
	return (
		<>
			<h1>Página de servicios</h1>
			<ol>
				{ServicesDB.map((oneService, idx) => <li key={idx}> {oneService.productName} <b>${oneService.price}</b> </li> )}
			</ol>
		</>
	)
}

export default Services;