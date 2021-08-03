// Dependencies
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
	// Slide data
	const data = [
		{
			imgUrl: '/img/landingPage/corousel-1.png',
			title: 'Manage all your subscriptions in one easy space.',
			subtitle: null,
		}, 
		{
			imgUrl: '/img/landingPage/corousel-2.png',
			title: 'Subtítulo The best financial assistant for your subscriptions.',
			subtitle: null,
		}, 
		{
			imgUrl: '/img/landingPage/corousel-3.png',
			title: 'Keep track of your subscriptions',
			subtitle: 'Get insights in your fixed.',
		}
	];

	return (
		<Carousel>
			{ 
				data.map((item, index) => {
					return (
						<Carousel.Item as="article" key={index}>
							<img
								className="d-block w-100"
								src={item.imgUrl}
								alt="Slide"
							/>
							<Carousel.Caption>
								<h4>{item.title}</h4>
								<p>{item.subtitle}</p>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})
			}
		</Carousel>
  	)
};

export default CarouselComponent;