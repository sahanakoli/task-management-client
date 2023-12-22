/* eslint-disable react/prop-types */


const TaskCard = ({tasks}) => {
    const {title, description, priority, deadlines} = tasks
    return (
        <div>
            <div className="mt-6">
                <div className="card w-[300px] h-[400px] bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Title: {title}</h2>
                        <p><span className=" text-sm font-medium">Description:</span> {description}</p>
                        <div className="flex gap-6">
                            <p className=" text-sm font-medium">Deadline: {deadlines}</p>
                            <p className=" text-sm font-medium">Priority: {priority}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;