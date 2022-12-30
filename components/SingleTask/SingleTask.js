import React from 'react';
import { toast } from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa'


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
        <div className=''>
            <div href="" className="group relative block h-96">
                <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                <div
                    className="relative flex h-full transform items-center border-2 border-white bg-gray-900 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                >
                    <div
                        className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0"
                    >
                        <img src={img} className='h-32 w-32 rounded-lg' alt='' />

                        <h2 className="mt-4 text-2xl text-white font-medium">{title}</h2>
                    </div>

                    <div
                        className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
                    >
                        <div>
                            <FaTrash onClick={() => handleDelete(singleTask)} className='text-4xl text-teal-accent-400' />
                        </div>

                        <p className="mt-4 text-white">
                            {description}
                        </p>

                        <div onClick={handleIncomplete} className="mt-5">
                            <button className='bg-teal-accent-400 hover:bg-teal-700 text-sm md:text-lg w-full  rounded-lg font-medium text-gray-900 px-3 py-2'>Incomplete?</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* <a href="#" className="block rounded-lg p-4 shadow-sm border-2 bg-gray-900 w-80 md:w-96">
                <div>
                    <FaTrash onClick={() => handleDelete(singleTask)} className='text-4xl text-teal-accent-400' />
                </div>
                <img
                    alt="Home"
                    src={img}
                    className="h-56 w-56 ml-14 rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dd className="text-xl mb-3 text-center text-white">{title}</dd>
                        </div>

                        <div>


                            <dd className="text-xl pb-5 text-white font-medium">{description}</dd>


                            <div onClick={handleIncomplete} className="">
                                <button className='bg-teal-accent-400 hover:bg-teal-700 text-sm md:text-lg w-full  rounded-lg font-medium text-gray-900 px-3 py-2'>Incomplete?</button>
                            </div>


                        </div>
                    </dl>

                    <div className="mt-6 flex items-center  gapx-6 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        </div>




                    </div>
                </div>
            </a> */}


        </div>
    );
};

export default SingleTask;