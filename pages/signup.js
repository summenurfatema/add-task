import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../components/context/UserContext";
import NavBar from "../components/NavBar/NavBar";




const Signup = () => {
    const { createUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value


        if (password.length < 6) {
            toast.error('Please enter at least 6 characters !!')
            return;
        }
        if (password !== confirm) {
            toast.error('Please enter correct password !!')
            return;
        }
        else { toast.success('Welcome to MY NOTEPAD !!!') }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset('')

            })
            .catch(error => toast.error(`${error}. 'Please  valid Email/Password'`))
    }





    return (
        <div>
            <NavBar />

            <div className='bg-gray-900 flex justify-center items-center py-16'>
                <div className="flex flex-col items-center space-y-1 shadow-lg bg-gray-900  w-[600px] p-10  border-white border-2 rounded-lg hover:shadow-lg hover:shadow-white md:space-y-3">

                    <h1 className='text-3xl font-bold mb-10 text-white'>Please Create an Account Here !!!</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-4 w-3/4">


                        <label className="text-xl text-white " htmlFor="name">Name</label>

                        <input
                            className="px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none"
                            type="text" name="name" id="" required />



                        <label className="text-xl text-white" htmlFor="email">Email address</label>
                        <input
                            className="px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none"
                            type="text" name="email" id="" required />



                        <label className="text-xl text-white" htmlFor="password">Password</label>
                        <input
                            className=" px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none"
                            type="password" name="password" id="" placeholder="*****************" required />


                        <label className="text-xl text-white" htmlFor="password">Confirm Password</label>
                        <input
                            className=" px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none"
                            type="password" name="confirm" id="" placeholder="*****************" required />




                        <button className="font-semibold text-xl text-white py-2 rounded-md bg-teal-500 hover:bg-teal-700 w-full">Register</button>
                        <p className='text-xl text-white'>Already have an account? <Link className='text-xl text-blue-700 hover:underline' href='/login'>Log in here</Link></p>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Signup;