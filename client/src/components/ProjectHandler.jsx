

import { useState,useEffect } from "react";
import axios from "axios";
const ProjectHandler = () => {
    const [todos, setTodos] = useState([]);
    const [update, setUpState] = useState(false);
  
    useEffect(() => {
      axios.get('http://localhost:8000/api/user')
        .then(res => setTodos(res.data))
        .catch(err => console.log(err));
    }, [update]);
  
   
  
    const changeState = (id, state) => {
      axios.patch(`http://localhost:8000/api/user/${id}`, { state :state})
        .then(res => console.log(res),setUpState(!update))
        .catch(err => console.log(err));
    }
  
    return (
        <div>
            
      <ul>
        <h1>Backlog</h1>
        {todos.filter(e => e.state === "todo").map((todo, i) => {
          return <li key={i}>{todo.name}{todo.Due} <button onClick={() => changeState(todo._id, "working")}>Working</button> </li>
        })}
      </ul>
      <ul>
        <h1>In progress</h1>
        {todos.filter(e => e.state === "working").map((todo, i) => {
          return <li key={i}>{todo.name}{todo.Due} <button onClick={() => changeState(todo._id, "finish")}>done</button> </li>
        })}
      </ul>
      <ul>
        <h1>Compelte</h1>
        {todos.filter(e => e.state === "finish").map((todo, i) => {
          return <li key={i}>{todo.name}{todo.Due} <button onClick={() => changeState(todo._id, "delete")}>delete</button> </li>
        })}
      </ul>
      
      



        </div>
     
      
    )

  }
  
  export default ProjectHandler;
  
