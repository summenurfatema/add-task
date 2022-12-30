import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/context/UserContext";
import NavBar from "../components/NavBar/NavBar";
import Task from "../components/Task/Task";



const Mytask = () => {
    const { user } = useContext(AuthContext)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch(`https://add-task-server.vercel.app/mytask?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))

    }, [user?.email])

    console.log(tasks);
    return (
        <div>
            <NavBar />
            <div>
                {
                    tasks.length === 0 ?

                        <div>

                            <img src='https://img.freepik.com/free-vector/white-outline-geometric-hexagonal-bipyramid-background-vector_53876-176699.jpg?w=740&t=st=1672392583~exp=1672393183~hmac=e8a6d288c5364e55d4cf8cec89438b236bd1015e9413d4dd2b147ed22472e1bf' className="min-h-screen min-w-full" alt='' />
                        </div>


                        :



                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-3 py-8 px-4 bg-black border-black">

                            {
                                tasks.map(task => <Task key={task._id} task={task} />)
                            }

                        </div>
                }
            </div>
        </div>
    );
};

export default Mytask;


