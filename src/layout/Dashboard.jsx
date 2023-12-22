import { NavLink, Outlet } from "react-router-dom";
import { FaHouse, FaSignsPost } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen bg-violet-600 text-white">
                    <ul className="menu p-4">
                        <>
                        <li>
                                <NavLink to="/dashboard/dragAndDrop">
                                    <FaSignsPost />
                                    Drag And Drop</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/newTask">
                                    <FaSignsPost />
                                    New Task </NavLink></li>
                            <li>
                                <NavLink to="/dashboard/previousTask">
                                    <FaSignsPost />
                                    Previous Task</NavLink></li>

                        </>

                        {/* sheard navLinks */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHouse></FaHouse>
                                Home</NavLink></li>
                    </ul>

                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;