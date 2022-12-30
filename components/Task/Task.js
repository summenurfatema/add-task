import { toast } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";


const Task = ({ task }) => {
    const { title, description, img, action } = task


    // complete
    const handleComplete = () => {

        fetch(`https://add-task-server.vercel.app/complete/${task._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("YaY !!! You've complete this task  !!!")



                }
            })
    }


    // delete

    const handleDelete = task => {
        const agree = window.confirm('Are you sure to delete ?')
        if (agree) {
            fetch(`https://add-task-server.vercel.app/alltask/${task._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('This task deleted successfully')
                        location.reload()
                    }
                })
        }
    }





    return (
        <div>
            <div className="group block h-96">
                <div
                    className="relative flex h-full items-center rounded-3xl border-4 border-black bg-gray-900 p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[5px_5px_0_0_#fff]"
                >
                    <div className="group-hover:absolute group-hover:opacity-0">
                        <img src={img} alt='' className="h-32 w-32 rounded-3xl" />
                        <p className="mt-4 text-lg font-semibold sm:text-2xl text-white">{title}</p>
                    </div>

                    <div
                        className="absolute opacity-0 shadow-white group-hover:relative group-hover:opacity-100"
                    >
                        <div className="bg-white p-2 rounded-lg mb-2 w-10"><FaTrashAlt onClick={() => handleDelete(task)} className='text-2xl text-teal-accent-400' /> </div>
                        <p className="text-lg font-medium pb-1 text-white">{description}</p>
                        <div >

                            {
                                action === 'completed' ?
                                    <button className="bg-teal-200 text-gray-900 rounded-lg px-3 w-full py-2 text-sm md:text-lg font-semibold">Completed</button>


                                    :
                                    <button onClick={() => handleComplete(task._id)} className="bg-teal-accent-400 text-gray-900 rounded-lg px-3 w-full py-2 text-lg font-semibold">Complete</button>

                            }


                        </div>


                    </div>
                </div>
            </div>




        </div>

    );
};

export default Task;