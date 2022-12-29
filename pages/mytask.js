import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/context/UserContext";
import NavBar from "../components/NavBar/NavBar";
import Task from "../components/Task/Task";



const Mytask = () => {
    const { user } = useContext(AuthContext)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/mytask?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))

    })

    console.log(tasks);
    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8 px-4">

                {
                    tasks.map(task => <Task key={task._id} task={task} />)
                }

            </div>
        </div>
    );
};

export default Mytask;


