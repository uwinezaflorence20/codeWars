import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from "../features/user"
function Logout() {
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(logout())}>LogOut</button>
    </div>
  )
}

export default Logout
