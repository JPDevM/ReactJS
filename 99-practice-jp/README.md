# Como hice esto

#### Inicializar el proyecto.

```shell
npx create-react-app 99-practice-jp
```

#### Instalar Bootstrap para react.

```shell
npm install react-bootstrap bootstrap
```

#### acomodar las carpetas públicas

Crear las carpetas `css`, `js`, `scss` y `img`, dentro de `assets` en src.

### Separar las secciones en páginas principales

> En `App.js` importo y creo los archivos JS.

```jsx
// Components.
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
```

Muevo `App.js` en la carpeta `assets/components` y además agrego las distintas secciones, en este caso `Menu.js`, `Main.js` y `Footer.js`.

```jsx
const Main = (props) => {
  return <p>Acá voy a poner el body variable</p>;
};

export default Main;
```

#### Crear los CSS para cada sección.

> Importo y creo un css para cada componente `Menu.css`, `Main.css` y `Footer.css` en `assets/css`.

```jsx
// CSS Custom Styles
import '../assets/css/Main.css';
```

#### Agregar Font Awesome para react proyect

> [Documentación](https://www.npmjs.com/package/@fortawesome/react-fontawesome)

#### Armar la DB como respuestas en Archivos JSON.

> Dejarlo como array en App.js

- [x] ActiveSubscription.json
- [ ] PopularSubscription.json
- [ ] Subscription.json

E.g. `App.js`.

```js
  Poner acá el ejemplo
```

#### Pasar por props los valores de las tarjetas.

- [ ] ActiveSubscription.json
- [ ] PopularSubscription.json
- [ ] Subscription.json
