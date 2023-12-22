import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const DragAndDrop = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="flex gap-2">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={user.photoURL} alt="" />
                            </div>
                        </div>
                        <h2 className="mt-2">{user.displayName}</h2>
                        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
                <div>
                    <h2 className="text-xl font-semibold ml-24">To-Do</h2>
                <div className="w-[300px] h-[400px] bg-base-200"></div>
                </div>
                <div>
                <h2 className="text-xl font-semibold ml-24">On-Going</h2>
                <div className="w-[300px] h-[400px] bg-base-200"></div>
                </div>
                <div>
                <h2 className="text-xl font-semibold ml-24">Completed</h2>
                <div className="w-[300px] h-[400px] bg-base-200"></div>
                </div>
            </div>           
        </div>
    );
};

export default DragAndDrop;