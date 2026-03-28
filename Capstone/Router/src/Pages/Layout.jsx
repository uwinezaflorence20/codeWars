import { Link, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#061626] w-[20%] flex flex-col">
        <div className=" bg-[#61C3CE] flex gap-4  p-4  font-bold text-xl rounded-e-3xl">
          <RxDashboard className="mt-1" />
          <Link to="">Dashboard</Link>
        </div>
        <div className=" hover:bg-[#61C3CE] flex gap-4  p-4  font-bold text-xl hover:rounded-e-3xl">
          <FaUser className="mt-1" />
          <Link
            to="user"
          >
            Users
          </Link>
        </div>
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
