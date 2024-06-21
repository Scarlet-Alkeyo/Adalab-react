import './index.css'
// import { Link, useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';


import { useState } from 'react';
import { login } from './utiils';

const Login = () =>{
    const navigate = useNavigate();


const [username ,setUserName] = useState('');
const [password,setPassword]= useState('');

console.log({username})
const handlelogin = async (event)=>{
    event.preventDefault();
    const result =await login ({username ,password});
    navigate('./users')
    console.log({result});

};

    return (
        <div>
            
            <form onSubmit={handlelogin}>

           
                <h2>login</h2>
                <input placeholder=" Enter username" type="text"onChange={(event)=>setUserName(event.target.value)}/>
                <input placeholder="Enter password" type="password"onChange={(event)=>setPassword(event.target.value)}/>
             <Link to="/users">  <button type="submit">Login</button></Link> 
            </form>
        </div>
    )
}

export default Login;