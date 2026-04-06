import React from 'react'

function UserCard({name,isAdmin,hobbies,age}) {
  return (
   <div className='text-black'>
      <h2> {name} {isAdmin && '(Admin)'}</h2>
      <p>Age:{age}</p>
      <ul>
        {hobbies.map(hobby=>(
            <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserCard
