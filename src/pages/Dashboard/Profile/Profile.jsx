import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2 className=" text-3xl font-semibold">Profile</h2>
            <div className="lg:overflow-x-auto mt-6">
                <table className="table w-1/2 lg:w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>

                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </div>
                            </td>
                            <td>{user.displayName}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                {
                    posts?.map(post => <ProfileCard key={post.id} post={post}></ProfileCard>)
                }
            </div> */}
        </div>
    );
};

export default Profile;