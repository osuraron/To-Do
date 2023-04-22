import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodo, deleteTodo}) {
  return ( 
      <ul className="list"> 
          {/* //short circuit */}
          {todos.length === 0 && "No Todos" } 
          {todos.map(todo => { //key is used as an identifier
          return (
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> //props from todoItem
          )
          })}
        </ul>
        
    
  )
}