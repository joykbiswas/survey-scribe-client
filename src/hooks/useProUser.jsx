import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useProUser = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isProUser, isPending: isProUserLoading } = useQuery({
        queryKey: [user?.email, 'isProUser'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`users/ProUser/${user?.email}`)
            console.log(res.data);
            return res.data?.proUser
        }
    });
    return [isProUser,isProUserLoading]

};

export default useProUser;