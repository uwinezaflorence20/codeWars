import React,{createContext,useState} from 'react'
export const UserContext = createContext(null);

export const CorrectReRender=({childeren})=> {
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
   <UserContext.Provider value={value}> {childeren}</UserContext.Provider>
  )
}

export default CorrectReRender
