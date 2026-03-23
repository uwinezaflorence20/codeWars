import { Link } from "react-router-dom";
const BookList = ()=>{
    return(
        <>
          <h1> BookLists</h1>
          <Link to="/book/1">Book 1</Link>
          <Link to="/book/2">Book 2</Link>
        </>
    )
}
export default BookList;