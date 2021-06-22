## JSX

#### Insertando expresiones en JSX

En el ejemplo a continuación, declaramos una variable llamada `name` y luego la usamos dentro del JSX envolviéndola dentro de llaves:

```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

Puedes poner cualquier expresión de JavaScript dentro de llaves en JSX. Por ejemplo, `2 + 2`, `user.firstName`, o `formatName(user)` son todas expresiones válidas de Javascript.

En el ejemplo a continuación, insertamos el resultado de llamar la función de JavaScript, `formatName(user)`, dentro de un elemento `<h1>`.

```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = <h1>Hello, {formatName(user)}! </h1>;

ReactDOM.render(element, document.getElementById('root'));
```

#### JSX también es una expresión

Después de compilarse, las expresiones JSX se convierten en llamadas a funciones JavaScript regulares y se evalúan en objetos JavaScript.

Esto significa que puedes usar JSX dentro de declaraciones `if` y bucles `for`, asignarlo a variables, aceptarlo como argumento, y retornarlo desde dentro de funciones:

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

#### Especificando atributos con JSX

Puedes utilizar comillas para especificar strings literales como atributos:

```js
const element = <div tabIndex="0"></div>;
```

También puedes usar llaves para insertar una expresión JavaScript en un atributo:

```js
const element = <img src={user.avatarUrl}></img>;
```

No pongas comillas rodeando llaves cuando insertes una expresión JavaScript en un atributo. Debes utilizar comillas (para los valores de los strings) o llaves (para las expresiones), pero no ambas en el mismo atributo.

    > Advertencia:
    >
    > Dado que JSX es más cercano a JavaScript que a HTML, React DOM usa la convención de nomenclatura camelCase en vez de nombres de atributos HTML.
    >
    > Por ejemplo, class se vuelve className en JSX, y tabindex se vuelve tabIndex.

#### Especificando hijos con JSX

Si una etiqueta está vacía, puedes cerrarla inmediatamente con `/>`, como en XML:

```js
const element = <img src={user.avatarUrl} />;
```

Las etiquetas de Javascript pueden contener hijos:

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

#### JSX previene ataques de inyección

Es seguro insertar datos ingresados por el usuario en JSX:

```js
const title = response.potentiallyMaliciousInput;
// Esto es seguro:
const element = <h1>{title}</h1>;
```

Por defecto, React DOM escapa cualquier valor insertado en JSX antes de renderizarlo. De este modo, se asegura de que nunca se pueda insertar nada que no esté explícitamente escrito en tú aplicación. Todo es convertido en un string antes de ser renderizado. Esto ayuda a prevenir vulnerabilidades XSS (cross-site-scripting).

#### JSX representa objetos

Babel compila JSX a llamadas de `React.createElement().`

Estos dos ejemplos son idénticos:

```js
const element = <h1 className="greeting">Hello, world!</h1>;
```

```js
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

React.createElement() realiza algunas comprobaciones para ayudarte a escribir código libre de errores, pero, en esencia crea un objeto como este:

```js
// Nota: Esta estructura está simplificada
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!',
  },
};
```

Estos objetos son llamados “Elementos de React”. Puedes pensar en ellos como descripciones de lo que quieres ver en pantalla. React lee estos objetos y los usa para construir el DOM y mantenerlo actualizado.

Renderizando elementos

Los elementos son los bloques más pequeños de las aplicaciones de React.

Un elemento describe lo que quieres ver en la pantalla:

const element = <h1>Hello, world</h1>;

A diferencia de los elementos del DOM de los navegadores, los elementos de React son objetos planos, y su creación es de bajo costo. React DOM se encarga de actualizar el DOM para igualar los elementos de React.

    Nota:

    Uno podría confundir los elementos con el muy conocido concepto de “componentes”. En la siguiente sección hablaremos de componentes. Los elementos son los que “constituyen” los componentes, y recomendamos leer esta sección antes de continuar.

Renderizando un elemento en el DOM

Digamos que hay un <div> en alguna parte de tu archivo HTML:

<div id="root"></div>

Lo llamamos un nodo “raíz” porque todo lo que esté dentro de él será manejado por React DOM.

Las aplicaciones construidas solamente con React usualmente tienen un único nodo raíz en el DOM. Dado el caso que estés integrando React en una aplicación existente, puedes tener tantos nodos raíz del DOM aislados como quieras.

Para renderizar un elemento de React en un nodo raíz del DOM, pasa ambos a ReactDOM.render():

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

Pruébalo en CodePen

Esto muestra “Hello, world” en la página.
Actualizando el elemento renderizado

Los elementos de React son inmutables. Una vez creas un elemento, no puedes cambiar sus hijos o atributos. Un elemento es como un fotograma solitario en una película: este representa la interfaz de usuario en cierto punto en el tiempo.

Con nuestro conocimiento hasta este punto, la única manera de actualizar la interfaz de usuario es creando un nuevo elemento, y pasarlo a ReactDOM.render().

Considera este ejemplo de un reloj en marcha:

function tick() {
const element = (
<div>
<h1>Hello, world!</h1>
<h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>
);
ReactDOM.render(element, document.getElementById('root'));}

setInterval(tick, 1000);

Pruébalo en CodePen

Este llama a ReactDOM.render() cada segundo desde un callback del setInterval().

    Nota:

    En la práctica, la mayoría de las aplicaciones de React solo llaman a ReactDOM.render() una vez. En las siguientes secciones aprenderemos cómo el código se puede encapsular en componentes con estado.

    Recomendamos que no te saltes ningún tema porque estos se relacionan entre ellos.

React solo actualiza lo que es necesario

React DOM compara el elemento y sus hijos con el elemento anterior, y solo aplica las actualizaciones del DOM que son necesarias para que el DOM esté en el estado deseado.

Puedes verificar esto inspeccionando el último ejemplo con las herramientas del navegador:

inspector del DOM mostrando actualizaciones diminutas

Aunque creamos un elemento que describe el árbol de la interfaz de usuario en su totalidad en cada instante, React DOM solo actualiza el texto del nodo cuyo contenido cambió.

En nuestra experiencia, pensar en cómo la interfaz de usuario debería verse en un momento dado y no en cómo cambiarla en el tiempo, elimina toda una clase de errores.
