/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px] mt-6 mb-16" style={{ backgroundImage: 'url(https://i.ibb.co/cNLSDMS/task.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white ">
                    <div>
                        <h1 className="mb-5 text-4xl font-bold ">Master Your Productivity Journey</h1>
                        <p className=" text-base font-medium">Boost productivity, achieve your goals, and stay ahead in a world of endless<br/> possibilities. Join Task management and take command<br/> of your productivity journey today!</p>
                        <p className="mb-5"></p>
                        <Link to='/dashboard'><button className="btn ">Let's Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;