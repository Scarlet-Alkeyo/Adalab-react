// import About from "./About";


import { Routes,Route,Link } from "react-router-dom";

// import { login } from "./Login/utiils";
import Login from "./Login";
import Users from "./Users";
import LoginLink from "./LoginLink";



const App=()=>{
  return(
    <div>
      <LoginLink/>
      {/* <LoginLink/>
     <nav>
      <Link  to="Login"> </Link>

     </nav> */}
      <Routes>

        <Route path='/login' element={<Login/>}/>

        <Route path='/users' element={<Users/>}/>
      </Routes>
      
     
      {/* <Login/>
      <Users/> */}

    </div>
  )
}

export default App;


// export const Introduction=()=>{
//   return(
//     <h1>We are Adalab</h1>
//   )
// }
