import SignupForm from "@/features/authentication/SignupForm";

function Signup() {
    return (
        <div className="flex flex-col h-screen justify-center align-middle mx-10 gap-4 sm:max-w-120 sm:mx-auto md:max-w-120 md:mx-auto">
            <SignupForm />
        </div>
    )
}

export default Signup;