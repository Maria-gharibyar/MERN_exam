import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FromSig = () => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmpassword: formData.confirmpassword,
      })
      .then((res) => {
        console.log(res.data);
        setIsAuthenticated(true);
        navigate("/main");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div>
      {isAuthenticated ? (
        <h1>You are already registered and authenticated</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              setFormdata({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) =>
              setFormdata({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id=""
            onChange={(e) =>
              setFormdata({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            id=""
            onChange={(e) =>
              setFormdata({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <input type="submit" value="Rgister" />
        </form>
      )}
    </div>
  );
};

export default FromSig;
