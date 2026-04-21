import React,{useState,createContext,useContext} from 'react'
const AppContext = createContext(null);
export const Example3=()=> {
const[userName,setUserName] = useState("PedroTech");
const[count,setCount] = useState(0);
  return (
    <AppContext.Provider value={{userName,setUserName,count,setCount}}>
        <Child1/>
        {/* <Child2/> */}
        <Child3/>
        <Child4/>
    </AppContext.Provider>
  )
}

export const Child1 = () =>{
    const {userName} = useContext(AppContext);
    return <h1>{userName}</h1>;
};

export const Child3 = () =>{
   const {count} = useContext(AppContext);
    return <h1>{count}</h1>;
};

export const Child4 = () =>{
   const {setCount} = useContext(AppContext);
   return(
    <div>
        <button
        onClick={()=>{
            setCount((c)=>c+1);
        }}
        >
change Count
        </button>
    </div>
   )
};

