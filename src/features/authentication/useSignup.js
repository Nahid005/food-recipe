import { signupUser } from "@/service/apiAuth"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"

export function useSignup() {
    const navigate = useNavigate();

    const {mutate, isPending} = useMutation({
        mutationFn: ({name, email, password}) => signupUser({name, email, password}),
        onSuccess: () => {
            toast.success("User signup successfully");
            navigate('/newsfeed');
        },
        onError: (error) => {
            console.log(error.message)
            toast.error("User signup faild")
        }
    })
    
    return {mutate, isPending}
}