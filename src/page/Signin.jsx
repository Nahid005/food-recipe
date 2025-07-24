import Logo from "@/components/ui/Logo";
import SigninForm from "@/features/authentication/SigninForm";

function Signin() {
    return (
        <div className="flex flex-col h-screen justify-center align-middle mx-10 gap-4 sm:max-w-120 sm:mx-auto md:max-w-120 md:mx-auto ">
            <Logo />
            <h3 className="font-bold text-xl text-gray-600 text-center">Share your best cooking experience <br /> on the planet.</h3>
            <SigninForm />
        </div>
    )
}

export default Signin;