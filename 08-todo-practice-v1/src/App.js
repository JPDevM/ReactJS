import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [ todos, setTodos ] = useState([
    {id: 1, name: 'todo 1', complete: false},
    {id: 2, name: 'todo 2', complete: true},
  ]);
  
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add todo</button>
      <button>Clear completed todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
