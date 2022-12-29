import React from 'react';
import CommentModal from '../Modal/CommentModal';

const SingleTask = ({ singleTask, handleDelete }) => {
    const { title, description, img } = singleTask
    // incomplete
    const handleIncomplete = event => {
        event.preventDefault()

        fetch(`http://localhost:5000/incomplete/${singleTask._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Information Updated !!!')
                }
            })
    }


    return (
        <div className='flex flex-col items-center py-10 space-y-3'>
            <a href="#" class="block rounded-lg p-4 shadow-sm border-2 bg-gray-700 w-96">
                <img
                    alt="Home"
                    src={img}
                    class="h-56 w-56 ml-14 rounded-md object-cover"
                />

                <div class="mt-2">
                    <dl>
                        <div>
                            <dd class="text-xl text-center text-white">{title}</dd>
                        </div>

                        <div>


                            <dd class="text-xl text-white font-medium">{description}</dd>
                        </div>
                    </dl>

                    <div class="mt-6 flex items-center  gapx-6 text-xs">
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">

                            <CommentModal className=' bg-black rounded-lg font-bold font-mono text-white px-3 py-2' />


                            {/* 
                            <div onClick={openModal} class="mt-1.5 sm:ml-3 sm:mt-0">
                                <button className='bg-black rounded-lg font-bold font-mono text-white px-3 py-2'>Add a comment</button>
                            </div> */}
                        </div>

                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">


                            <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                <button onClick={() => handleDelete(singleTask)} className='bg-black rounded-lg font-bold font-mono text-white px-3 py-2'>Delete</button>
                            </div>

                        </div>

                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">


                            <div onClick={handleIncomplete} class="mt-1.5 sm:ml-3 sm:mt-0">
                                <button className='bg-black rounded-lg font-bold font-mono text-white px-3 py-2'>Not completed?</button>
                            </div>

                        </div>


                    </div>
                </div>
            </a>


        </div>
    );
};

export default SingleTask;