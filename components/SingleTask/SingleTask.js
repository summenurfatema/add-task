import React from 'react';
import { toast } from 'react-hot-toast';


const SingleTask = ({ singleTask, handleDelete }) => {


    const { title, description, img } = singleTask


    // incomplete task 

    const handleIncomplete = event => {
        event.preventDefault()

        fetch(`https://add-task-server.vercel.app/incomplete/${singleTask._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Ops !!! It was an incomplete task")
                }
            })
    }


    return (
        <div className='flex flex-col items-center py-10 relative'>
            <a href="#" class="block rounded-lg p-4 shadow-sm border-2 bg-gray-700 w-80 md:w-96 h-[600px]">
                <img
                    alt="Home"
                    src={img}
                    class="h-56 w-56 ml-14 rounded-md object-cover"
                />

                <div class="mt-2">
                    <dl>
                        <div>
                            <dd class="text-xl mb-3 text-center text-white">{title}</dd>
                        </div>

                        <div>


                            <dd class="text-xl text-white font-medium">{description}</dd>
                        </div>
                    </dl>

                    <div class="mt-6 flex items-center  gapx-6 text-xs">
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                        </div>
                        {/* button */}

                        <div className='flex pr-4 absolute 
                        bottom-16 md:bottom-16'>


                            <div class="mr-3">
                                <button className='bg-teal-accent-400 hover:bg-teal-700 text-sm md:text-lg   rounded-lg font-medium text-gray-900 px-3 py-2'>Comment</button>
                            </div>




                            <div>
                                <button onClick={() => handleDelete(singleTask)} className='bg-teal-accent-400 hover:bg-teal-700 text-sm md:text-lg   rounded-lg font-medium text-gray-900 px-3 py-2'>Delete</button>
                            </div>






                            <div onClick={handleIncomplete} class="ml-2">
                                <button className='bg-teal-accent-400 hover:bg-teal-700 text-sm md:text-lg   rounded-lg font-medium text-gray-900 px-3 py-2'>Incomplete?</button>
                            </div>

                        </div>


                    </div>
                </div>
            </a>


        </div>
    );
};

export default SingleTask;