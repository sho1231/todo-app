import React from 'react'
import TodoI from './todoitem'
export default function todolist({todo,onDelete}) {
    let st={
        margin:"20px auto",
        padding:"2px",
        
    }
  return (
    <div className="container" style={st}>
        <h3 className="text-center">Todo Lists</h3>
        {todo.length?
            todo.map((item)=><><TodoI item={item} key={item.no} onDelete={onDelete} /><hr/></>):
            <span>Todo list empty</span>
        }
    </div>
  )
}
