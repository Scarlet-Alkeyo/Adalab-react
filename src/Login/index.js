import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from './utiils';

const Login = () =>{


const [username ,setUserName] = useState('')
const [password,setPassword]= useState('')

console.log({username})
const handlelogin = async (event)=>{
    event.preventDefault();
    const result =await login ({username ,password})
    console.log({result});

};

    return (
        <div>
            
            <form onSubmit={handlelogin}>

           
                <h2>login</h2>
                <input placeholder=" Enter username" type="text"onChange={(event)=>setUserName(event.target.value)}/>
                    <br></br>
                    

                <input placeholder="Enter password" type="password"onChange={(event)=>setPassword(event.target.value)}/>
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;