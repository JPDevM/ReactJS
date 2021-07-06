axios
	.get('endPoint')
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	});

fetch('endPoint')
	.then(response => {
		return response.json();
	})
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	});

axios
	.post('endPoint', {body})
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	});

fetch('endPoint', {
	method: 'POST',
	body: body,
	headers: {'Content-Type': 'application/json'}
})
	.then(response => {
		return response.json();
	})
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	});


fetch('endPoint1')
	.then(response => response.json())
	.then(dataEndPoint1 => {
		let data1 = dataEndPoint1;
		fetch('endPoint2')
			.then(response => response.json())
			.then(dataEndPoint2 => {
				let data2 = dataEndPoint2;
				fetch('endPoint3')
					.then(response => response.json())
					.then(dataEndPoint3 => {
						let data3 = dataEndPoint3;

						const finalData = [ ...data1, ...data2, ...data3 ];
					})
					.catch(error => {
						console.log(error);
					});
			})
			.catch(error => {
				console.log(error);
			});
	})
	.catch(error => {
		console.log(error);
	});


async function getData () {
	let data1 = await fetch('endPoint1').then(response => response.json());
	let data2 = await fetch('endPoint2').then(response => response.json());
	let data3 = await fetch('endPoint3').then(response => response.json());
	return [data1, data2, data3];
}

getData()
	.then(allData => {
		console.log(allData);
	})

	