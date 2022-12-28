import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../components/context/UserContext";
import NavBar from "../components/NavBar/NavBar";




const Login = () => {

    const { signIn } = useContext(AuthContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value


        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset('')
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <NavBar />
            <div className='bg-gray-900 flex justify-center items-center py-16'>
                <div className="flex flex-col items-center space-y-1 shadow-lg bg-gray-900 text-white w-[600px] p-10  border-white border-2 rounded-lg hover:shadow-lg hover:shadow-white md:space-y-3">

                    <h1 className='text-3xl font-bold mb-10'>Please Log In Here !!!</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-4">



                        <label className="text-xl" htmlFor="email">Email address</label>
                        <input
                            className="px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-800"
                            type="text" name="email" id="" required />



                        <label className="text-xl" htmlFor="password">Password</label>
                        <input
                            className=" px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none focus:border-yellow-800 focus:ring-1 focus:ring-yellow-800"
                            type="password" name="password" id="" required />

                        <p></p>




                        <button className="font-semibold text-xl  text-white py-2 rounded-md bg-indigo-800 w-full">Login</button>
                        <p className='text-xl'>Already have an account? <Link className='text-xl text-blue-700 hover:underline' href='/signup'>Sign up here</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;