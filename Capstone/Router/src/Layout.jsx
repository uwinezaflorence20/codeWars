import { Link, Outlet } from "react-router-dom";
const Layout =()=>{
      return(
        <div className="h-56 w-[100%] flex">
            <div className="bg-blue-300 w-[30%] flex flex-col">
               <Link to="dash" className="p-4  font-bold text-xl rounded-y-2xl">Dashboard</Link>
               <Link to="user" className="p-4  font-bold text-xl rounded-y-2xl">Users</Link>
               <Link to="setting" className="p-4  font-bold text-xl rounded-y-2xl">setting</Link>
            </div>
            <div className="bg-red-500 w-[70%]">
              <Outlet/>
            </div>
        </div>

    )
}
export default Layout;