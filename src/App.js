import Header from './header'
import TodoL from './todolist'
import Footer from './footer'
import Add from './addtodo';
import Home from './home';
import About from './about';
import React,{useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
function App() {
const onDelete=(item)=>{

  setList(list.filter((e)=>e!==item));


  //     console.log(list.length);
  // console.log(list);
  // const obj=[];
  // for(let i in list)
  //     obj.push(list[i]);
  // console.log(obj);
  //   setList(obj);

}
const add=(obj2)=>{
  // setList(obj);
  setList([...list,obj2])
}
const [list,setList]=useState([
])
  return (
   <BrowserRouter>
    <Switch>
    <div>
    <Header name="Shourja"/>
        <Route path="/" render={()=>
        <>
        <Home name="Shourja" likes={{cricket:true}} />
        {/* <About name="Shourja"/> */}
        </>
        }
        ></Route>
        <Route path="/tasks" component={()=>
           <>
           <Add todo={list} add={add}/>
            <TodoL todo={list} onDelete={onDelete}/>
          </>
        }>

        </Route>
        {/* <Route exact path="/tasks">
          <Redirect to="/home"></Redirect>
        </Route> */}
        <Route  path="/about/" component={()=><About/>}></Route>
        <Footer/>
        {console.log("version:",React.version)}       
    </div>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
