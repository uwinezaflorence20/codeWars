import { Link } from "react-router-dom";
const BookList = ()=>{
    return(
        <div>
          <h1> BookLists</h1>
          <Link to="/books/1">Book 1</Link>
          <Link to="/books/2">Book 1</Link>
        </div>
    )
}
export default BookList;