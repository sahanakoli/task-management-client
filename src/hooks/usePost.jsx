import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePost = () => {
    const axiosPublic = useAxiosPublic();

    const {data: posts = []} = useQuery({
        queryKey: ['posts'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/posts');
            return res.data;
        }
    }) 
    return [posts]
};

export default usePost;