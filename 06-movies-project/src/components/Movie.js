// CSS Custom Styles
import '../assets/css/Movie.css';

const Movie = props => {
	const { movieData } = props;
	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 my-4">
			<div className="movie-box">
				<img className="img-fluid" src={`/images/${movieData.image}`} alt={movieData.title} />
				<div className="movie-box__info">
					<h2>{movieData.title}</h2>
					<p>{movieData.year}</p>
				</div>
			</div>
		</div>
	)
}

export default Movie;