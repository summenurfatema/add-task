import NavBar from "../components/NavBar/NavBar";
import SingleTask from "../components/SingleTask/SingleTask";


const CompletedTask = ({ completedTasks }) => {


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


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-900 min-h-screen" >


                {completedTasks.map(singleTask =>


                    <SingleTask key={singleTask._id}
                        singleTask={singleTask}
                        handleDelete={handleDelete}

                    />)}
            </div>

        </div>
    );
};

export default CompletedTask;

export const getStaticProps = async () => {
    const res = await fetch(`https://add-task-server.vercel.app/completetasks/completed
    `)
    const data = await res.json()
    return {
        props: {
            completedTasks: data
        }
    }
}