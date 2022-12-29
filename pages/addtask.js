
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../components/context/UserContext';
import NavBar from '../components/NavBar/NavBar';
import { FaPencilAlt } from 'react-icons/fa'


const AddTask = () => {

    const { user } = useContext(AuthContext)

    const imgBbKey = "5264a75dacc9a5a19565b12a2671f321"
    console.log(imgBbKey)

    // display image

    const [previewImage, setPreviewImage] = useState()
    const check = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setPreviewImage(e.target.files[0])

        }

    }

    const handleAddTask = event => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const email = form.email.value
        const img = form.img.files[0]
        const description = form.description.value


        const formData = new FormData()
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgBbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const addTask = {
                        email,
                        title,
                        img: imgData.data.url,
                        description,
                        action: "incomplete"


                    }


                    fetch('https://add-task-server.vercel.app/addedtask', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addTask)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.acknowledged) {

                                toast.success(`You have added a task successfully`)
                                form.reset('')

                            }
                            else {
                                toast.error('Error')
                            }
                        })
                        .catch(err => toast.error(err))

                }
            })

    }


    return (

        <div>

            <NavBar />
            <div className='bg-gray-900 flex justify-center items-center py-16 min-h-[1000px] '>
                <div class="flex flex-col items-center space-y-1 shadow-lg  w-[600px] p-10 md:space-y-3 border-2 hover:shadow-white hover:shadow-lg">

                    <h1 className='text-3xl text-center font-bold mb-10 text-white border-b w-full pb-2'>Add a task <FaPencilAlt className='inline-block text-teal-accent-400 mb-2' /></h1>

                    <div onChange={previewImage}
                        className='hover:scale-110 duration-300'>
                        {
                            previewImage ?
                                <img className='h-60 w-60' src={URL.createObjectURL(previewImage)} alt='' />
                                :
                                <img className='h-60 w-60 mb-5' src='https://img.freepik.com/free-vector/paper-pencil-cartoon-icon-illustration-education-object-icon-concept-isolated-flat-cartoon-style_138676-2137.jpg?size=338&ext=jpg&ga=GA1.1.821203553.1657130385&semt=sph' alt='' />
                        }
                    </div>

                    <form onSubmit={handleAddTask} class="flex flex-col items-start space-y-3 border-2 p-2 rounded-lg hover:shadow-white hover:shadow-lg w-full">


                        <input hidden name="email" value={user?.email} placeholder={user?.email} readOnly />


                        <input
                            class="px-3 py-2 rounded-lg shadow-sm border  border-none w-full focus:outline-none  bg-gray-900 text-white" placeholder='Title'
                            type="text" name="title" id="" required />


                        <textarea
                            class="px-3 py-2 rounded-lg shadow-sm border  border-none w-full focus:outline-none  bg-gray-900 text-white" placeholder='Details'
                            type="text" name="description" id="" required />



                        <input
                            class=" px-3 py-2 rounded-lg shadow-sm border  border-none w-full focus:outline-none  bg-gray-900 text-white"
                            type="file" name="img" id="" onChange={check} accept='image/*' required />



                        <div class="flex items-center space-x-2">

                        </div>

                        <button class="font-semibold text-xl text-white py-2 rounded-md bg-teal-500 hover:bg-teal-700 w-full">Submit</button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddTask;