
import TodoComponent from './components/ToDo'; // Buscar el index.js cuando no se especifica

function App() {
  return (
    <>
     {/* <TodoList todos= Es un atibuto que se a conertir en la prop del TodoList.js (los nombres deben ser iguales)
    {todos} /> */}
    
      <h2>Todo List App</h2>
      <TodoComponent />
    </>
  )
}

export default App;
