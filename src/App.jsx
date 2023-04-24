import NewFormTodo from "./NewFormTodo";
import TodoList from "./TodoList";
import "./styles.css"
import { useEffect, useState } from 'react';

export default function App(){
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue === null) return []
    return JSON.parse(localValue)
  })
  //get from localstorage


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))  
  }, [todos]) //everytime the todos change, the localstorage is updated 
   
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
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}