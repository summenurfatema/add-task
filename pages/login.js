import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../components/context/UserContext";
import NavBar from "../components/NavBar/NavBar";




const Login = () => {

    const { signIn, google } = useContext(AuthContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value


        signIn(email, password)
            .then(result => {
                const user = result.user;
                toast.success('You have logged in successfully !!!')
                form.reset('')

            })
            .catch(error => toast.error(`${error}.Please provide valid Email/Password`))
    }

    // google sign in
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        google(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('You have logged in successfully !!!')
            })
            .catch(error => console.log(error))

    }


    return (
        <div>
            <NavBar />
            <div className='bg-gray-900 flex justify-center items-center px-2 py-16'>
                <div className="flex flex-col items-center space-y-1 shadow-lg bg-gray-900 text-white w-[600px] p-10  border-white border-2 rounded-lg hover:shadow-lg hover:shadow-white md:space-y-3">

                    <h1 className='text-2xl md:text-3xl font-bold mb-10'>Please Log In Here !!!</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-4">



                        <label className="text-xl" htmlFor="email">Email address</label>
                        <input
                            className="px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none text-black"
                            type="text" name="email" id="" required />



                        <label className="text-xl" htmlFor="password">Password</label>
                        <input
                            className=" px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none text-black"
                            type="password" name="password" id="" required />

                        <p></p>




                        <button className="font-semibold text-xl  text-white py-2 rounded-md bg-teal-accent-400 hover:bg-teal-700 w-full">Login</button>

                    </form>

                    <p className="my-2 font-semibold text-white text-lg">-------------OR------------</p>

                    <div>
                        <button onClick={handleGoogleSignIn} className='font-semibold text-xl  text-white py-2 px-3 rounded-md bg-teal-accent-400 hover:bg-teal-700 w-full'>Sign in with Google</button>
                    </div>
                    <p className='text-sm md:text-lg'>New to MY NOTEPAD ? <Link className='text-xl text-blue-700 hover:underline' href='/signup'>Sign up now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;