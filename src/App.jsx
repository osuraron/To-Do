import NewFormTodo from "./NewFormTodo";
import "./styles.css"
import { useState } from 'react';

export default function App(){
  const [todos, setTodos] = useState([])
   
function addTodo(title){
  setTodos(currentTodos => { //setting the id of each item
    return [
      ...currentTodos,
      {id: crypto.randomUUID(), title, completed: false},
    ]
  })
}

function toggleTodo(id, completed){ //toggle check
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id) {
        return { ...todo, completed}
      }
      return todo
    })
  })
}

function deleteTodo(id){ //delete function
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

return ( 
  <>
  <NewFormTodo onSubmit={addTodo} /* props object is sent to the newformtodo.jsx */ /> 
  <h1 className="header">Todo List</h1>
  <ul className="list"> 
    {/* //short circuit */}
    {todos.length === 0 && "No Todos" } 
    {todos.map(todo => { //key is used as an identifier
    return <li key={todo.id}>  
      <label>
        <input type="checkbox" checked={todo.completed} onChange={e=> toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
        <button onClick={()=>deleteTodo(todo.id)} className="btn btn-danger">Delete</button> 
     </li> //()=> passing a function | deleteTodo(todo.id) is passing the result
    })}
  </ul>
  </>
  )
}