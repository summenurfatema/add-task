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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-3 py-8 px-4 bg-black border-black">

                    {
                        tasks.map(task => <Task key={task._id} task={task} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Mytask;


