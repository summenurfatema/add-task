
import { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

const AddTask = () => {
    // const [value, onChange] = useState(new Date());

    const imgBbKey = "5264a75dacc9a5a19565b12a2671f321"
    console.log(imgBbKey)

    const [previewImage, setPreviewImage] = useState()


    // const displayImage = e => {
    //     alert((previewImage))
    // }
    const check = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setPreviewImage(e.target.files[0])
        }
    }

    const handleAddTask = event => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
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

                        title,
                        img: imgData.data.url,

                        description,


                    }
                    console.log(addTask)


                    //         fetch('', {
                    //             method: 'POST',
                    //             headers: {
                    //                 'content-type': 'application/json'
                    //             },
                    //             body: JSON.stringify(addTask)
                    //         })
                    //             .then(res => res.json())
                    //             .then(data => {
                    //                 console.log(data)
                    //                 if (data.acknowledged) {
                    //                     alert(`You have added a task successfully`)

                    //                 }
                    //                 else {
                    //                     alert('Error')
                    //                 }
                    //             })
                    //             .catch(err => console.error(err))
                    //         console.log(addTask)
                }
            })

    }


    return (
        <div>

            <NavBar />
            <div className='bg-gray-900 flex justify-center items-center py-16 '>
                <div class="flex flex-col items-center space-y-1 shadow-lg  w-[600px] p-10 md:space-y-3 border-2 hover:shadow-white hover:shadow-lg">

                    <h1 className='text-3xl font-bold mb-10 text-white border-b'>Add a task</h1>

                    <div onChange={previewImage}
                        className='hover:scale-110 duration-300'>
                        {
                            previewImage ?
                                <img className='h-48 w-60' src={URL.createObjectURL(previewImage)} alt='' />
                                :
                                <img src='https://img.freepik.com/free-vector/paper-pencil-cartoon-icon-illustration-education-object-icon-concept-isolated-flat-cartoon-style_138676-2137.jpg?size=338&ext=jpg&ga=GA1.1.821203553.1657130385&semt=sph' alt='' />
                        }
                    </div>

                    <form onSubmit={handleAddTask} class="flex flex-col items-start space-y-3 border-2 p-2 rounded-lg hover:shadow-white hover:shadow-lg w-full">

                        {/* <Calendar onChange={onChange} value={value} /> */}
                        {/* <Calendar /> */}
                        {/* <Calender className='bg-white w-full' onChange={onChange} value={value} name='datetime' /> */}
                        {/* 
                    <DateTimePicker onChange={onChange} value={value} className='bg-white w-full' /> */}
                        {/* <label class="text-xl" htmlFor="title">Task Title</label> */}
                        <input
                            class="px-3 py-2 rounded-lg shadow-sm border  border-none w-full focus:outline-none  bg-gray-900 text-white" placeholder='Title'
                            type="text" name="title" id="" required />

                        {/* <label class="text-xl" htmlFor="description">Description</label> */}
                        <textarea
                            class="px-3 py-2 rounded-lg shadow-sm border  border-none w-full focus:outline-none  bg-gray-900 text-white" placeholder='Details'
                            type="text" name="description" id="" required />




                        {/* <label class="text-xl" htmlFor="img">Add an image</label> */}
                        <input
                            class=" px-3 py-2 rounded-lg shadow-sm border  border-none w-full focus:outline-none  bg-gray-900 text-white"
                            type="file" name="img" id="" onChange={check} accept='image/*' required />





                        <div class="flex items-center space-x-2">

                        </div>

                        <button class="font-semibold text-xl text-white py-2 rounded-md bg-indigo-800 w-full">Submit</button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddTask;