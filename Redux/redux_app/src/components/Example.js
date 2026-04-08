import react,{useState,createContext,useContext} from "react"
const AppContex = createContext(null);// default value

export const Parent =()=>{
    const [userName,setUserName] = useState("PedroTech");
    return(
        <AppContex.Provider value={{userName,setUserName}}>
            <div>
                {userName}
                <Child/>
            </div>
        </AppContex.Provider>
    );
};

export const Child = ()=>{
    return <Grandchild />
}
export const Grandchild = ()=>{
    const {setUserName} = useContext(AppContex);
    return(
        <div>
<button onClick={()=>{
    setUserName("PedroTechnologies");
}}
>
Change userName
</button>
        </div>
    )
}