# Workflow to create frontend with ReactJS

##### Initialize the project. 

```shell
$ npx create-react-app 99-practice-jp
```

##### Install Bootstrap for ReactJS.

```shell
$ npm install react-bootstrap bootstrap
```

##### Structure public folders.

Create the folders `css`,` js`, `scss` and` img`, inside `assets` en and` components` inside `src`.

.<img src="./src/assets/img/docs/Structure_Folders.png" alt="Structure_Folders" style="zoom:50%;" />

##### Compose the main sections.

> Create the JS files of the components and import them.

In main file. e.g.: <u>app.js</u>

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

Create the components in `assets/components`. e.g.: <u>Menu.js</u>

> Idem in the other componets. e.i.: Main.js, Footer.js.

```jsx
const Main = (props) => {
  return <p>Hello, {props.name}</p>;
};

export default Main;
```

##### Create the CSS for each section.

Import and create a css for each component. e.g.: <u>Menu.css</u>

> Idem in the other componets. e.i.: Main.css, Footer.css.

```jsx
// CSS Custom Styles
import '../assets/css/Menu.css';
```

##### Pasar por props los valores de las tarjetas.

- [x] ActiveSubscription.json
- [ ] PopularSubscription.json
- [ ] Subscription.json





##### Armar el ruteador

> [Documentación](https://reactrouter.com/web/guides/quick-start) de react-router-dom

- [x] Setear el router en app.
- [ ] Falta ver que más ya que no puse ningún link aún.

#### 



##### Install thrid-party dependencies.

* Font Awesome para react proyect. [Documentación](https://www.npmjs.com/package/@fortawesome/react-fontawesome)





##### Armar la DB como respuestas en Archivos JSON.

> Dejarlo como array en App.js

- [x] ActiveSubscription.json
- [ ] PopularSubscription.json
- [ ] Subscription.json

E.g. `App.js`.

```js
  Poner acá el ejemplo
```



#### Acomodar el css de las tarjetas
