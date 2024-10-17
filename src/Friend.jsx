export default function Friend({friend}){
  const {name, email ,username}=friend;
  return(
    <div className='box'>
      <h4>Name: {name}</h4>
      <p>Email: {email} </p>
      <p>UserName: {username}</p>
    </div>
  )
}