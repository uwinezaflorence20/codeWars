import { useOutletContext, useParams } from "react-router-dom";

let Book = ()=>{
    const {id} =useParams()
    const obj = useOutletContext()
    return <h1 className="text-4xl">Book {id} {obj.hello}</h1>
}
export default Book;