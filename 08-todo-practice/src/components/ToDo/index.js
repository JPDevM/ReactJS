import { useState, useRef } from 'react';
import TodoList from './TodoList';

function TodoComponent() {

	const [todosArray, setTodosArray] = useState([]);

	const todoNameRef = useRef(); // es como un querySelector
	/* 
	  todoNameRef es un objeto literal, ya que fue capturado con usRef() de REACT por lo tanto si queremos acceder al elemento de DOM original, tenemos que hacer: todoNameRef.current
	*/

	const generateID = () => {
		let allTodos = todosArray; // Guardamos una copia del estado para poder hacer el pop() y así no modificar el estado original 
		let lastTodo = allTodos.pop();
		return lastTodo ? lastTodo.id + 1 : 1;
	}

	function handleAddTodo(e) {
		const name = todoNameRef.current.value;

		if (name === '') {
			todoNameRef.current.style.border = 'solid 1px red';
			return;
		}

		setTodosArray(prevTodos => {
			return [
				...prevTodos,
				{
					id: generateID(),
					name: name,
					complete: false
				}
			]
		})

		todoNameRef.current.value = null
	}

	return (
		<>
			<TodoList todosData={todosArray} />
			<input ref={todoNameRef} type="text" />
			<button onClick={handleAddTodo}>Add todo</button>
			<button>Clear completed todos</button>
			<div>{ todosArray.reduce((acum, todo) => acum + !todo.complete , 0) } left to do</div>
		</>
	)

}

export default TodoComponent;
