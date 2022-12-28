import React from 'react';

const SingleTask = ({ singleTask }) => {
    const { title, description, img } = singleTask
    return (
        <div className=''>
            <a href="#" class="block rounded-lg p-4 shadow-sm border-2 bg-white w-96">
                <img
                    alt="Home"
                    src={img}
                    class="h-56 w-full rounded-md object-cover"
                />

                <div class="mt-2">
                    <dl>
                        <div>


                            <dd class="text-sm text-gray-500">{title}</dd>
                        </div>

                        <div>


                            <dd class="font-medium">{description}</dd>
                        </div>
                    </dl>

                    <div class="mt-6 flex items-center gap-8 text-xs">
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">


                            <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                <button className='bg-red-600 px-2 py-1'>Add a comment</button>
                            </div>
                        </div>

                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">


                            <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                <button className='bg-red-600 px-2 py-1'>Add a comment</button>
                            </div>
                        </div>


                    </div>
                </div>
            </a>


        </div>
    );
};

export default SingleTask;