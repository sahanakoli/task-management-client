import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTask = () => {
    const axiosPublic = useAxiosPublic();

    const {data: task = []} = useQuery({
        queryKey: ['task'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/previousTask');
            return res.data;
        }
    }) 
    return [task]
};

export default useTask;