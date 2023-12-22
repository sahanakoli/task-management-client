/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {
    const task = useLoaderData();

    const {_id, title, description, deadlines, priority} = task;
    const handleUpdate = e =>{
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadlines = form.deadlines.value;
        const priority = form.priority.value;
        
        

        const updatedTask = {title,description, deadlines, priority}

        // send data to the server
        fetch(`https://task-management-server-black-omega.vercel.app/posts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })

        
    }
      
    return (
        <div className="mb-6">
            <form onSubmit={handleUpdate}>
                {/* Title */}
                <div className="form-control w-1/2 my-6">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Task Title"
                        defaultValue={title}
                        name="title"
                        required
                        className="input input-bordered w-full" />
                </div>
                {/* Description */}
                <div className="form-control w-1/2 my-6">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        defaultValue={description}
                        name="description"
                        required
                        className="input input-bordered w-full" />
                </div>
                {/* deadline */}
                <div className="form-control w-1/2 my-6">
                    <label className="label">
                        <span className="label-text">Deadlines</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Deadlines"
                        name="deadlines"
                        defaultValue={deadlines}
                        required
                        className="input input-bordered w-full" />
                </div>
                {/* priority */}
                <div className="form-control w-1/2 my-6">
                    <label className="label">
                        <span className="label-text">Priority</span>
                    </label>
                    <select type="text" placeholder='Level' name="priority" defaultValue={priority}  className="input w-full input-bordered " required>
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

export default Update;