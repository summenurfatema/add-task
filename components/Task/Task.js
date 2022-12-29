import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

const Task = ({ task }) => {
    const { title, description, img, email, action, _id } = task

    const [update, setUpdate] = useState({})

    // const handleCompletedTask = async () => {
    //     const response = await fetch("http://localhost:5000/completedtask", {

    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(task)
    //     })

    //         .then(res => res.json())
    //         .then(data => {

    //             if (data.acknowledged) {
    //                 alert("Congrates ! You've completed your task")

    //             }
    //             else {
    //                 alert('Error')
    //             }
    //         })
    //         .catch(err => console.error(err))


    // }


    const handlecomplete = event => {
        event.preventDefault()

        fetch(`http://localhost:5000/complete/${task._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Information Updated !!!')
                }
            })
    }

    const handleDelete = task => {
        const agree = window.confirm('Are you sure to delete ?')
        if (agree) {
            fetch(`http://localhost:5000/alltask/${task._id}`, {
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

            <div className="w-80">
                <a class="group block h-[450px]">
                    <div
                        class="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]"
                    >
                        <div>
                            <div class="flex flex-col lg:group-hover:absolute -top-20  lg:group-hover:opacity-0 items-center justify-center ml-8">
                                <img className="h-32 w-44 my-2 relative -top-10 rounded-3xl" src={img} alt='' />

                                <p class=" text-xl font-bold sm:text-2xl">{title}</p>
                            </div>
                        </div>

                        <div
                            class="absolute opacity-0 -top-28 lg:group-hover:relative lg:group-hover:opacity-100"
                        >


                            <p class="-mt-60 text-lg font-medium leading-relaxed">
                                {description}
                            </p>
                            <div>

                                <div className="">
                                    <button className=" bg-black text-white px-2 py-3 rounded-xl absolute -bottom-32 left-0 font-mono">
                                        Update
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(task)} className=" bg-black text-white px-2 py-3 rounded-xl font-mono absolute -bottom-32 left-20">
                                        Delete                            </button>
                                </div>

                                {
                                    action === "incomplete" ?

                                        <button onClick={handlecomplete} className=" bg-black text-white px-2 py-3 rounded-xl font-mono absolute absolute -bottom-32 left-40">
                                            Complete
                                        </button>

                                        :

                                        <button disabled title="Already completed" className=" bg-gray-700 text-white px-2 py-3 rounded-xl font-mono absolute absolute -bottom-32 left-40">
                                            Completed
                                        </button>


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