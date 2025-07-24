import { signinUser } from "@/service/apiAuth"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"

export function useSignin() {

    const navigate = useNavigate();
    
    const {mutate, isPending} = useMutation({
        mutationFn: ({email, password}) => signinUser({email, password}),
        onSuccess: () => {
            toast.success("User successfully signin");
            navigate("/newsfeed")
        },
        onError: (error) => {
            console.log(error);
            toast.error("User signin faild")
        }
    })


    return {mutate, isPending}
}