export default function Chef(prop){
    return(
<div className="">
        <header className="mine  text-black  flex flex-row justify-center gap-2 text-4xl ">
            <img src={prop.img} alt={prop.alt} className=""/>
            <p>{prop.name}</p>
        </header>
        </div>
    
    )
}