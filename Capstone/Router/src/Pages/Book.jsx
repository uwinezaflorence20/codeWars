import { useParams } from "react-router-dom";

let Book = ()=>{
    const {id} =useParams()
    return <h1 className="text-4xl">Book {id}</h1>
}
export default Book;