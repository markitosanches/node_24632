const ManyTasks = () => {
    const tasks = [
        {
            "id": 1,
            "text": "Buy groceries",
            "day": "2023-12-12 16:30:00",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Exercise for 30 minutes",
            "day": "2023-12-19 08:15:00",
            "reminder": true
        },
        {
            "id": 3,
            "text": "Read a book",
            "day": "2024-01-01 00:01:00",
            "reminder": false
        },
        {
            "id": 4,
            "text": "Write in a journal",
            "day": "2024-01-16 12:45:00",
            "reminder": false
        }
    ]

    return(
        <>
            { tasks.map((task)=>(<h3 className="bg-blue-200 p-2 my-2 px-4 cursor-pointer text-base font-bold rounded" key={task.id}>{task.text}</h3>))}            
        </>
    )
}

export default ManyTasks