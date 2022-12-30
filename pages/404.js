import Link from 'next/link';
import React from 'react';

const Error = () => {
    return (
        <div>
            <div class="grid h-screen px-4 place-content-center bg-gray-900">
                <div class="text-center">
                    <h1 class="font-black  text-9xl text-white">404</h1>

                    <p
                        class="text-2xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Uh-oh!
                    </p>

                    <p class="mt-4  text-gray-400">
                        We can't find that page.
                    </p>

                    <Link
                        href="/"
                        class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-teal-accent-400 rounded hover:bg-teal-700 focus:outline-none focus:ring"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Error;