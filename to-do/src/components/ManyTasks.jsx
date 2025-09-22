import SingleTask from './SingleTask'
const ManyTasks = ({tasks, onDelete, onToggle}) => {


    return(
        <>
            { tasks.map((task)=>(<SingleTask key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}            
        </>
    )
}

export default ManyTasks