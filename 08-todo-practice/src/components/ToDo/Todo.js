import React from 'react'

export default function Todo({ todo }) {
  const handlerCheck = (e) => {
    console.log(e.currentTarget);
  }
  return (
    <div>
      <label onClick={handlerCheck} >
        <input type='checkbox' />
        { todo.name }
      </label>
    </div>
  )
}
