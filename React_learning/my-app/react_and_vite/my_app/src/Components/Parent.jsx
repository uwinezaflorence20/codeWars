import React from 'react'

function Parent() {
  return (
    <div>
      <UserCard
       name="Alice"
       age={25}
       isAdmin={true}
       hobbies={['coding','hiking']}
       />
    </div>
  )
}

export default Parent
