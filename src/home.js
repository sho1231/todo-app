import React from 'react'
// import {useLocation} from "react-router-dom";
export default function Home(props) {
  console.log("Hello:",props);
  // document.title="Home"
  // let location=useLocation();
  return (
    <div>
      <h1>Hi!!!{props.name}</h1>
      {console.log(props.likes)};
    </div>
  )
}
