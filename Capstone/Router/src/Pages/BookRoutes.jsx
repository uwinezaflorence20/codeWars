import { Routes,Route } from "react-router-dom";
import Book from "./Book";
import BookList from "./BookList"
import NewBooks from "./NewBooks";
import BookLayout from "./BookLayout";
let BookRoutes = () =>{
    return(
        <>
        <Routes>
            <Route element={<BookLayout/>}>
             <Route index element={<BookList/>}/>
             <Route path=":id" element={<Book/>}/>
             <Route path=":new" element={<NewBooks/>}/>
             </Route>
        </Routes>
        </>
    )
}
export default BookRoutes;