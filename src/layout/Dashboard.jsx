import { NavLink, Outlet } from "react-router-dom";
import {  FaHouse,  FaSignsPost  } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen bg-violet-600 text-white">
                    <ul className="menu p-4">
                                <>
                                    <li>
                                        <NavLink to="/dashboard/myProfile">
                                            <CgProfile />
                                            My Profile</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/addPost">
                                            <FaSignsPost />
                                            Add Post </NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/myPost">
                                            <FaSignsPost />
                                            My Posts</NavLink></li>

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