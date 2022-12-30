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

                {
                    completedTasks.length === 0 ?

                        <div>

                            <img src='https://img.freepik.com/free-vector/white-outline-geometric-hexagonal-bipyramid-background-vector_53876-176699.jpg?w=740&t=st=1672392583~exp=1672393183~hmac=e8a6d288c5364e55d4cf8cec89438b236bd1015e9413d4dd2b147ed22472e1bf' className="min-h-screen min-w-full" alt='' />
                        </div>

                        :


                        <div className="grid grid-cols-1 px-6 md:grid-cols-3 gap-6 bg-black min-h-screen z-0 py-7" >



                            {completedTasks.map(singleTask =>


                                <SingleTask key={singleTask._id}
                                    singleTask={singleTask}
                                    handleDelete={handleDelete}

                                />)}
                        </div>
                }
            </div>

        </div>
    );
};

export default CompletedTask;

