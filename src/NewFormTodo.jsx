import React from 'react'
import { useState } from 'react'

export default function NewFormTodo(onSubmit) { // match the prop (onsubmit with the prop at app.jsx (destructuring)
  const [newItem, setNewItem] = useState("") //useState 

    function handleSubmit(e) { //add function
        e.preventDefault()
        if(newItem === "") return
        
        onSubmit.onSubmit(newItem)
        setNewItem("")
      }      

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)} //setNewItem with event listener
       type="text" 
       id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  )
}
