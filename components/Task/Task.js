import { toast } from "react-hot-toast";


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
                    location.reload()


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
                        toast.error('This task deleted successfully')
                        location.reload()
                    }
                })
        }
    }





    return (
        <div>

            <div className='flex flex-col items-center py-10'>
                <a href="#" class="block rounded-lg p-4 shadow-sm border-2 bg-gray-700 h-[700px] w-80 md:w-96 relative">
                    <img
                        alt="Home"
                        src={img}
                        class="h-56 w-56 ml-8 md:ml-14 rounded-md object-cover"
                    />

                    <div class="mt-2">
                        <dl>
                            <div>
                                <dd class="text-xl pb-4 text-center text-white">{title}</dd>
                            </div>


                            <div>


                                <dd class="text-xl text-white font-medium">{description}</dd>
                            </div>
                        </dl>
                    </div>

                    <div class="mt-6 flex items-center  gapx-6 text-xs">
                        <div class="sm:inline-0 -ml-2 md:ml-0 flex absolute bottom-1 space-x-1 md:space-x-4 sm:shrink-0 sm:items-center">


                            <div className="">


                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <button className='bg-teal-500 hover:bg-teal-700 text-xl rounded-lg font-medium  text-gray-900 px-3 py-2'>Update</button>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">


                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <button onClick={() => handleDelete(task)} className='bg-teal-500 hover:bg-teal-700 text-xl rounded-lg font-medium  text-gray-900 px-3 py-2'>Delete</button>
                                </div>

                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">

                                {
                                    action === "completed" ?


                                        <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                            <button className='bg-teal-300 text-lg rounded-lg font-medium font-mono text-gray-900 px-3 py-2'>Completed</button>
                                        </div>


                                        :

                                        <div onClick={() => handleComplete(task._id)} class="mt-1.5 sm:ml-3 sm:mt-0">
                                            <button className='bg-teal-500 hover:bg-teal-700 text-lg rounded-lg font-medium  text-gray-900 px-3 py-2'>Complete</button>
                                        </div>

                                }



                            </div>
                        </div>


                    </div>
                </a>
            </div>
        </div>


    );
};

export default Task;