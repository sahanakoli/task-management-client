/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PostCard = ({post}) => {
  const {_id,title, description, priority, deadlines} = post
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            fetch(`https://task-management-server-black-omega.vercel.app/posts/${_id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                          Swal.fire(
                            'Deleted!',
                            'Task has been deleted.',
                            'success'
                          )
                    }

                })
            console.log('delete confirmed')
        }
    })
}
    return (
        <div className="mt-6">
            <div className="card w-[300px] h-[400px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Title: {title}</h2>
                    <p><span className=" text-sm font-medium">Description:</span> {description}</p>
                    <div className="flex gap-6">
                    <p className=" text-sm font-medium">Deadline: {deadlines}</p>
                    <p className=" text-sm font-medium">Priority: {priority}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/update/${_id}`}><button className="btn bg-violet-900 text-white">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-violet-900 text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;