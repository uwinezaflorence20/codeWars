import { Link, Outlet } from "react-router-dom";
let BookLayout = () => {
  return (
    <div>
      <Link to="/book/1">Book 1</Link>
      <br />
      <Link to="/book/2">Book 2</Link>
      <br />
      <Link to="/book/new">New Books</Link>
      <Outlet context={{hello:"world"}}/>
    </div>
  );
};
export default BookLayout;
