import React,{createContext,useState} from 'react'
export const UserContext = createContext(null);

export const CorrectReRender=()=> {
    const [user,setUser] = useState(null);
    const [isAuth,setIsAuth] = useState(false);
    const [isPremierUser,setIsPremierUser] = useState(false);
    const value = {
        user,
        setUser,
        isAuth,
        setIsAuth,
        isPremierUser,
        setIsPremierUser
    }
  return (
    <div>
      
    </div>
  )
}

export default CorrectReRender
