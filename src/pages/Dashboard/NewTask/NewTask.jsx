import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const NewTask = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        
            // now send the post data to the server with the image url
            const newTask = {
                title: data.title,
                description: data.description,
                deadlines: data.deadlines,
                priority: data.priority
            }
            console.log(newTask)
            const postRes = await axiosSecure.post('/posts', newTask);
            console.log(postRes.data)
            if(postRes.data.insertedId){
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Task create successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
            
        }
        console.log('with url', data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Title */}
                <div className="form-control w-1/2 lg:w-full my-6">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Task Title"
                        {...register('title', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                {/* Description */}
                <div className="form-control w-1/2 lg:w-full my-6">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        {...register('description', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                {/* deadline */}
                <div className="form-control w-1/2 lg:w-full my-6">
                    <label className="label">
                        <span className="label-text">Deadlines</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Deadlines"
                        {...register('deadlines', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                {/* priority */}
                <div className="form-control w-1/2 lg:w-full my-6">
                    <label className="label">
                        <span className="label-text">Priority</span>
                    </label>
                    <select type="text" placeholder='Level' {...register('priority', { required: true })}   className="input w-full input-bordered " required>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                </div>

                <button className="btn bg-violet-900 text-white w-1/2">
                    Create 
                </button>
            </form>
        </div>
    );
};

export default NewTask;