import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#061626] w-[20%] flex flex-col">
        <Link
          to=""
          className=" bg-[#61C3CE]  p-4  font-bold text-xl rounded-e-3xl"
        >
          Dashboard
        </Link>
        <Link
          to="user"
          className="hover:bg-[#61C3CE] hover:rounded-e-3xl p-4  font-bold text-xl rounded-y-2xl"
        >
          Users
        </Link>
        <Link
          to="project"
          className="hover:bg-[#61C3CE] hover:rounded-e-3xl p-4  font-bold text-xl rounded-y-2xl"
        >
          Project
        </Link>
        <Link
          to="calendars"
          className="hover:bg-[#61C3CE] hover:rounded-e-3xl p-4  font-bold text-xl rounded-y-2xl"
        >
         Calendar
        </Link>
        <Link
          to="tasks"
          className="hover:bg-[#61C3CE] hover:rounded-e-3xl p-4  font-bold text-xl rounded-y-2xl"
        >
          Tasks
        </Link>
        <Link
          to="reporting"
          className="hover:bg-[#61C3CE] hover:rounded-e-3xl p-4  font-bold text-xl rounded-y-2xl"
        >
          Reporting
        </Link>
        <Link to="setting" className="p-4  font-bold text-xl rounded-y-2xl">
          setting
        </Link>
          <Link to="help" className="p-4  font-bold text-xl rounded-y-2xl">
          Help
        </Link>
      </div>
      <div className="bg-white text-black w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
