import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {

    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutUs">About Us</NavLink></li>
        <li><NavLink to="/rules">Rules</NavLink></li>
        
    </>

    // const { user, logOut } = useContext(AuthContext);

    // const handleSignOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }

    return (
        <div>
            <div className="navbar static bg-base-100 shadow-lg w-11/12 mx-auto rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img className="w-16 h-12" src={logo} alt="" />
                    <a className=" normal-case text-xl font-semibold ml-4">Task Management</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user ?
                            <div className=" flex-row lg:flex justify-center items-center mr-4 gap-2">
                                <p className=" text-lg font-semibold">{user?.displayName}</p>
                                <img className=" w-12 h-12 rounded-full" src={user?.photoURL ? user.photoURL : `https://i.ibb.co/D9wWRM6/olivia.jpg`} alt="" />
                            </div>
                            :
                            <div>
                            </div>
                    } */}
                    {/* { */}
        {/* user ?
        <button onClick={handleSignOut} className="btn btn-primary text-white">Sign Out</button>
        : */}
        <Link to="/login">
            <button className="btn bg-violet-900 text-white">Login</button>
        </Link>
      {/* } */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;