import UserCard from "../Atoms/UserCard";
import './index.css';
import { useGetUsers } from "./hooks/useGetUsers"





const Users =()=>{



   const {users,error,loading} = useGetUsers();
   console.log(users);

    return (
        <div className="users">
         { loading && <h2>loading users ...</h2>}
         { error.length > 0&& <h2>{error}</h2>}
         {users.length > 0 ? users.map((users)=>(
            <UserCard
            key={users.id}
            image= {users.image}
            fullName = {`${users.firstName}  ${users.lastName}  `}
            gender={users.gender} 
             age={users.age}
             address={users.email}
            />
         )):! loading && <h2>No user found</h2>}
        </div>    )
}
export default Users