import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Task = ({setShowAddTask}) => {
    const { id } = useParams()
    const [task, setTask] = useState([])
    useEffect(() => {
        setShowAddTask(false)
        const fetchTask = async () => {
            try{
                const response = await fetch(`http://localhost:5000/tasks/${id}`)
                const data = await response.json()
                setTask(data)
            }catch(error){
                console.error('Error fetching data: ', error)
            }
        }
        fetchTask();
    }, [setShowAddTask, id])

    return(<>
        <div className="bg-blue-200 my-2 p-2 px-4 cursor-pointer rounded">
            <h3 className="flex items-center justify-between font-bold text-lg">
                { task.text }
            </h3>
            <p><strong>Id: </strong> {task.id }</p>
            <p><strong>Reminder: </strong> {task.reminder ? 'yes' : 'no'}</p>
            <Link to="/" className="text-blue-700 hover:underline">Go Back</Link>
        </div>
    </>
    )
}
export default Task