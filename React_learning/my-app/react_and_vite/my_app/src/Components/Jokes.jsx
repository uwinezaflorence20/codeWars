export default function Jokes(props){
    console.log(props)
    return(
        <div className="">
            <p>The SetUp: {props.Setup}</p>
                <p>The PunchLines: {props.Punchline}</p> 
                <hr />
        </div>
        
    )
}