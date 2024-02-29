import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewProject = (props) => {
  const [task, settask] = useState({
    name: "",
    Due: "",
  });

  const Handler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user", task)
      .then((res) => {
        console.log(res.data);
        settask(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    
    
    <form onSubmit={Handler}>
      <input
        type="text"
        onChange={(e) => settask({ ...task, name: e.target.value })}
      />
      <input
        type="date"
        name=""
        id=""
        onChange={(e) => settask({ ...task, Due: e.target.value })}
      />
      <input type="submit" value="Send" />
      <Link to={"/main"}>Back to Dashboard</Link>
    </form>
  );
};

export default NewProject;
