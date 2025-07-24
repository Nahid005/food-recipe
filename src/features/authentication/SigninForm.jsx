import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signinformSchema } from "@/utils/validation";
import { Link } from "react-router";
import { useSignin } from "./useSignin";


function SigninForm() {

    const {mutate: signin, isPending: isSignin} = useSignin();

    const form = useForm({
        resolver: zodResolver(signinformSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    
    function onSubmit({email, password}) {
        signin({email, password});
    }

    return (
        <div className="">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg shadow-sm flex flex-col gap-0">
                    <FormField control={form.control} name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input disabled={isSignin} type="email" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isSignin} type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isSignin} type="submit">Sign In</Button>
                    <p className="text-center">You don't have an Accont please <Link to="/signup" className="font-bold">Signup</Link></p>
                </form>
            </Form>
        </div>
    )
}

export default SigninForm;