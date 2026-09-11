import React from 'react'

function Child({name,age,isAdmin,hobbies}) {
  return (
    <div>
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

export default Child
