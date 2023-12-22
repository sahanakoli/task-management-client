import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div className="form-control">
           <button onClick={handleGoogle}  className="btn font-medium bg-blue-300 text-white mt-4"><FcGoogle className="mr-2 w-4 h-4"></FcGoogle>Google Sign In</button> 
        </div>
    );
};

export default SocialLogin;