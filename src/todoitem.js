import React from 'react'

export default function Todoitem({item,onDelete}) {
  return (
    <div className="mb-3">
      <h5>No:{item.no}</h5>
      <h5>Job:{item.job}</h5>
      <button className="btn btn-sm btn-danger" onClick={()=>onDelete(item)}>delete</button>
    </div>
  )
}
