import Header from './components/Header'
import AddTask from './components/AddTask'
import ManyTasks from './components/ManyTasks'
import { useState, useEffect } from 'react'

function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      const getTasks = async () =>  {
        const tasksFromServer = await fetchTasks('http://localhost:5000/tasks')
        setTasks(tasksFromServer)
      }
      getTasks()
    }, [])

    const fetchTasks = async (url) => {
      const res = await fetch(url)
      const data = await res.json()
      return data
    }


    const deleteTask = async (id) => {
      // alert(id)
      // console.log(id)
        await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'DELETE'
        })
      setTasks(tasks.filter((task)=>task.id !== id))
    }
    const toggleReminder = (id) => {
        // alert(id)
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder} :  task ))
    }
    const addTask = async (task) => {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      const newTask = await res.json()

      // console.log(task)
      // const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0
      // const id = lastId + 1
      // const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }
    
    const [showAddTask, setShowAddTask] = useState(false)
  return(
    <div className="font-sans min-h-screen">
      <div className="container mx-auto p-8 border-2 border-blue-200 mt-16 max-w-screen-md rounded" >
        <Header toggleForm={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        { showAddTask && <AddTask onAdd={addTask}/>}
        <ManyTasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      </div>
    </div>
  )
}

export default App;