export default function Body(props){
    return(
        <section className="text-black h-32">
            <h1 className="text-3xl p-8"> Welcome back,{props.userName}!</h1>
        </section>
    )
}