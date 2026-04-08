import react,{useState,createContext} from "react"
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

export const Child = ({setUserName})=>{
    return <Grandchild setUserName={setUserName}/>
}
export const Grandchild = ({setUserName})=>{
    return(
        <div>

        </div>
    )
}