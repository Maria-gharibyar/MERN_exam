import { useState } from "react"
import axios from 'axios'
const Project=()=>{
    const [errors, setErrors] = useState([]); 
    const[form,setform]=useState({
        name:"",
        Due:"",
        state:"working"
    })
    const Handler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/user',form)
        .then(res=>console.log(res))
        .catch(err=>{
            setErrors(err.response.data.errors);
        })     
    }
    return(
            <form onSubmit={Handler}>
               { errors.name ? 
                        <p>{errors.name.message}</p>
                        : null
                    }
                <input type="text" onChange={(e)=>setform({...form,name:e.target.value})} />
                { errors.Due ? 
                        <p>{errors.Due.message}</p>
                        : null
                    }
                <input type="date" name="" id="" onChange={(e)=>setform({...form,Due:e.target.value})} />
                <input type="submit" value="Send" />
            </form>
    )
}
export default Project