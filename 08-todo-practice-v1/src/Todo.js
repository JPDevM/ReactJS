import React from 'react'

export default function Todo({ todo }) {
  
  console.log('from Todo: ' + todo);
  console.log(todo);
  
  return (
    <div>
      <label>
        <input type='checkbox' checked={ todo.complete } />
        { todo.name }
      </label>
    </div>
  )
}
