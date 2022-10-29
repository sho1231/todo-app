import React from 'react'

export default function footer() {
  let style={
    position:"fixed",
    bottom:"0px",
    width:"100%",
  }
    return (
      <footer className="bg-dark text-light py-112" style={style}>
       <p className="text-center">Todos web</p>
      </footer>
    )
  }
  