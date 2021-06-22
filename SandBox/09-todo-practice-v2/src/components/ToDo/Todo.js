import React from 'react';

export default function Todo({ todo, handlerCheck }) {
  return (
    <div>
      <label>
        <input 
          type='checkbox' 
          onClick={handlerCheck} 
          data-todo-id={ todo.id } 
        />
        { todo.name }
      </label>
    </div>
  )
}
