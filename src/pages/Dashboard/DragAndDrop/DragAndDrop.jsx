import PostCard from "../../../component/PostCard/PostCard";
import usePost from "../../../hooks/usePost";


const DragAndDrop = () => {
    // const { user } = useContext(AuthContext);
    const [posts] = usePost();
    console.log(posts)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
                <div>
                    <h2 className="text-xl font-semibold ml-24">To-Do</h2>
                <div className="w-[300px] gap-6 ">
                    <div className="grid grid-cols-1">
                        {
                            posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
                        }
                    </div>
                </div>
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