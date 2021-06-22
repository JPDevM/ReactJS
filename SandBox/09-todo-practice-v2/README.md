# React To-do WorkFlow

Create a new react proyect.

Tenemos que hacer una lista de to-dos. Por lo que vamos a componetizarlo.
`<TodoList />` dentro de este componente vamos a mapear cada to-do en un nuevo componente `<Todo />`

Damos valores por default usando `useState`y los pasamos en le componente como props.

useState hace que el componente tenga estado y guarda este estado en las variables todosArray y SetTodosArray.
	

in `app.js`

```jsx
const [todosArray, setTodosArray] = useState(
  [
    {
      'id': 1
      'name': 'Tarea 1'
      'complete': false
    }, 
    {
      'id': 2
      'name': 'Tarea 2'
      'complete': false
    }
  ]
)
```

```jsx
<TodoList todosData={todosArray} />
```

Creamos un archivo para el componente `TodoList.js` y mapeamos cada to-do en un nuevo componente.

En `TodoList.js`. ((((terminar de editar este contenido))))

```jsx
export default function TodoList({ todosData: todos, fnCheck }) {
  return (
    <>
      {
        todos && todos.map( todo => {
          return <Todo key={ todo.id } todo={ todo } handlerCheck={fnCheck} />
        })
      }
      
      { todos.length <= 0 && <p>Ingresá tu primer tarea</p> }
    </>
  )
}
```



  



 ![imgDoc-1](./public/imgDoc/imgDoc-1.png)

![imgDoc-2](./public/imgDoc/imgDoc-2.png)

![imgDoc-3](./public/imgDoc/imgDoc-3.png)