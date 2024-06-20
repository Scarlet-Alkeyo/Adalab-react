

const UserCard = ({image,fullName,gender,age})=>{
    return (
        <div>
           <img src={image} alt = {`${fullName} profile`}/>
        
           <h2>{fullName}</h2>
           {gender}
           {age}
            
        </div>
    )
}
export  default UserCard;