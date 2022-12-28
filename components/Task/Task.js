import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";

const Task = ({ task }) => {
    const { title, description, img } = task

    const handleCompletedTask = async () => {
        const response = await fetch("http://localhost:5000/completedtask", {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    alert("Congrates ! You've completed your task")

                }
                else {
                    alert('Error')
                }
            })
            .catch(err => console.error(err))






    }



    return (
        <div>

            <div className="w-80">
                <a class="group block h-80">
                    <div
                        class="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]"
                    >
                        <div class="flex flex-col lg:group-hover:absolute lg:group-hover:opacity-0 items-center justify-center ml-8">
                            <img className="h-32 w-44 my-2 rounded-3xl" src={img} alt='' />

                            <p class=" text-xl font-bold sm:text-2xl">{title}</p>
                        </div>

                        <div
                            class="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100"
                        >


                            <p class="-mt-60 text-lg font-medium leading-relaxed">
                                {description}
                            </p>
                            <button onClick={handleCompletedTask} className=" bg-black text-white px-2 py-3 rounded-xl font-mono absolute bottom-0">
                                Completed
                            </button>
                        </div>
                    </div>
                </a>



            </div>


        </div>
    );
};

export default Task;