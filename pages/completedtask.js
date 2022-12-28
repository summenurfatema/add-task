import SingleTask from "../components/SingleTask/SingleTask";


const CompletedTask = ({ completedTasks }) => {
    console.log(completedTasks);
    return (
        <div>

            <div className="grid grid-cols-2 gap-6  bg-gray-900">
                {completedTasks.map(singleTask => <SingleTask key={singleTask._id} singleTask={singleTask} />)}
            </div>

        </div>
    );
};

export default CompletedTask;

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:5000/completetask`)
    const data = await res.json()
    return {
        props: {
            completedTasks: data
        }
    }
}