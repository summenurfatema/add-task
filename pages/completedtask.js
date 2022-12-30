import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/context/UserContext";
import NavBar from "../components/NavBar/NavBar";
import SingleTask from "../components/SingleTask/SingleTask";


const CompletedTask = () => {

    const { user } = useContext(AuthContext)
    const [completedTasks, setCompletedTasks] = useState([])
    useEffect(() => {
        fetch(` https://add-task-server.vercel.app/completetasks/completed/${user?.email}`)
            .then(res => res.json())
            .then(data => setCompletedTasks(data))

    }, [user?.email])


    // delete
    const handleDelete = singleTask => {
        const agree = window.confirm('Are you sure to delete ?')
        if (agree) {
            fetch(`https://add-task-server.vercel.app/completedtasks/${singleTask._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('This task deleted successfully')
                        location.reload()
                    }
                })
        }
    }


    return (
        <div>
            <NavBar />

            <div>
                <div className="grid grid-cols-1 px-6 md:grid-cols-3 gap-6 bg-black min-h-screen z-0 py-7" >


                    {completedTasks.map(singleTask =>


                        <SingleTask key={singleTask._id}
                            singleTask={singleTask}
                            handleDelete={handleDelete}

                        />)}
                </div>
            </div>

        </div>
    );
};

export default CompletedTask;

