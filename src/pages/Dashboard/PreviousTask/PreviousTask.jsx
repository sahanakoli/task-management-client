import TaskCard from "../../../component/TaskCard/TaskCard";
import useTask from "../../../hooks/useTask";



const PreviousTask = () => {
    const [task] = useTask();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            task.map(tasks => <TaskCard key={tasks.id} tasks={tasks}></TaskCard> )
                        }
                    </div>
        </div>
    );
};

export default PreviousTask;