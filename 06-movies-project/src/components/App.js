// Components
import MoviesList from './MoviesList';

const moviesArray = [
	{ image: 'poster01.jpg', title: 'Superman 1', year: 2019 },
	{ image: 'poster02.jpg', title: 'Superman 2', year: 2028 },
	{ image: 'poster03.jpg', title: 'Superman 3', year: 2020 },
	{ image: 'poster04.jpg', title: 'Superman 4', year: 2009 },
	{ image: 'poster01.jpg', title: 'Superman 1', year: 2019 },
	{ image: 'poster02.jpg', title: 'Superman 2', year: 2028 },
	{ image: 'poster03.jpg', title: 'Superman 3', year: 2020 },
	{ image: 'poster04.jpg', title: 'Superman 4', year: 2009 },
]

function App() {
	return (
		<div className="container">
			<h2>Busca tu película</h2>
			<form action="/" method="GET">
				<div className="form-group">
					<input type="text" name="searchWord" className="form-group w-50"/>
				</div>
				<button type="submit" className="btn btn-info">Buscar</button>
			</form>

			<MoviesList movies={moviesArray} />
		</div>
	);
}

export default App;
