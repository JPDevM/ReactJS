// Components
import Movie from './Movie';

const MoviesList = props => {
	const { movies } = props;
	return (
		<div className="row">
			{ movies.map((movie, idx) => <Movie key={idx} movieData={movie} />) }
		</div>
	)
}

export default MoviesList;