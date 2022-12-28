import NavBar from "../components/NavBar/NavBar";
import Task from "../components/Task/Task";

const Mytask = ({ tasks }) => {
    console.log(tasks);
    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8 px-4">

                {
                    tasks.map(task => <Task key={task._id} task={task} />)
                }

            </div>
        </div>
    );
};

export default Mytask;
export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:5000/mytasks`)
    const data = await res.json()
    return {
        props: {
            tasks: data
        }
    }
}