

const UserCard = ({image,fullName,gender,age,address})=>{
    return (
        <div>
           <img src={image} alt = {`${fullName} profile`}/>
        
           <h2>{fullName}</h2>
           <p> {gender}</p>
           <p>{age} </p>
           <p>{address}</p>
            
        </div>
    )
}
export  default UserCard;