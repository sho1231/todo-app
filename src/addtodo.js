import React,{useState} from 'react';
export default function Addtodo({todo,add}) {
    const [job,setJob]=useState("");
    let onClick=()=>{
        if(!job)
            alert("Todo cannot be empty while submitting");
        else{
            let id;
            if(todo.length===0){
                console.log("here")
                id=0
            }
            else
                id=todo.length
            let obj={
                no:Number(id)+1,
                job:job
            }
            console.log("This is from addtodo",obj);
            add(obj);
            setJob("");
        }
    }
  return (
    <div className="container">
      <form onSubmit={(e)=>e.preventDefault()}>
  <div className="mb-2">
    <label For="Job" className="form-label">Add your todo</label>
    <input type="text" className="form-control" id="Job" value={job} onChange={({target:{value}})=>setJob(value)}/>
  </div>
  <button type="submit" className="btn btn-sm btn-success" onClick={onClick}>Submit</button>
</form>
    </div>
  )
}
