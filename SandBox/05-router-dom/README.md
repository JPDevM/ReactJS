# Trabajando con React Roter

Para trabajar con una aplicación que se comporte como una SPA y que nos dé la posibilidad de manejar internamente rutas vamos a tener que instalar: `react-router-dom`. Así:

Con npm 

```shell
npm install react-router-dom
```

Con yarn:

```shell
yarn add react-router-dom
```

Una vez instalada la librería, tenemos que ir al archivo `index.js`, que es nuestro entry point y anidar a la aplicación como tal (`<App />`) con este componente:

```js
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<App />
	</Router>
, document.getElementById('root'));
```

Una vez hecho esto, vamos a usar el componente que nos permite hacer enlaces dentro de nuestra aplicación. Lo ideal es usar este componente, pues si usamos un `<a></a>` tradicional, nuestra aplicación se va a recargar.

```js
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
```

El componente `<Link>` reemplaza a cualquier etiqueta de enlace y nos permite generar enlaces dentro de la aplicación. Se usa el atributo `to` que funciona igual que el atributo `href` en un enlace normal.

Luego, cuando queremos mostrar un determinado componente dependiendo de la ruta a la que nos dirigimos, vamos a tener que utilizar el componente `<Route></Route>` que viene con la librería `react-router-dom`, así:

```js
import { Route } from 'react-router-dom';

<Route path="/jsx">
	<h1 className="text">¿Qué es JSX?</h1>
	<h2>Hoy nos visita {user.name}</h2>
	<p>JSX = Javascript extended markup</p>
</Route>
```

Acá lo importante, es que el atributo `path` sea quien matchea con el atributo `to` de cada enlace. Para que de esa manera se pueda mostrar el componente.

Cuando tenemos un componente que se monta en la ruta `/` (raíz), este mismo va a quedar siempre visible para los demás componentes, ya que todos se monta especificando la barra, ej: 

```js
<Route path="/">...</Route> // Este componente se va a mostrar siempre
<Route path="/about">...</Route>
<Route path="/contact">...</Route>
```

Para evitar lo anterior, necesitamos definir el atributo `exact` en todos aquellos componentes que se monten en rutas muy genéricas.

```js
<Route path="/" exact>...</Route> // solo se muestra si la ruta es exactamente /
<Route path="/about">...</Route>
<Route path="/contact">...</Route>
```

Otra manera de montar componentes, cuándo ellos no tiene más data, es así:

```js
<Route path="/rick" component={RickMorty} />
```

En ocasiones vamos a querer trabajar con rutas dinámicas y para ello podemos hacer lo siguiente:

```js
<Route path="/profiles/:id" component={ProfileDetail} />
```

En lo anteior `:id` significará que vamos a pasar un parámetro en la ruta, al cual le dimos el nombre de `id`. Ese parámetro, luego lo vamos a capturar en el componente `ProfileDetail`.

Dentro de componente `ProfileDetail`, vamos a recibir en las `props` un objeto llamado `match` que a su vez tiene otro objeto llamado `params` y en donde allí se van almacenar, todos los parámetros que hayamos pasado por la ruta

```js
const ProfileDetail = (props) => {
	let { id } = props.match.params;
	let heroina = heroinas.filter(heroina => heroina.id === Number(id)).pop();
	return (
		<React.Fragment>
			<h3>{ heroina.nombre }</h3>
			<img src={`/images/${heroina.url}`} alt="" />
		</React.Fragment>
	)
}
```
