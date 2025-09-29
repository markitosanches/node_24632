import Header from './components/Header'
import AddTask from './components/AddTask'
import ManyTasks from './components/ManyTasks'
import Footer from './components/Footer'
import About from './components/About'
import Task from './components/Task'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
    const toggleReminder =  async (id) => {
        // alert(id)
        const taskToToggle = await fetchTasks(`http://localhost:5000/tasks/${id}`)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
        const res = await fetch(`http://localhost:5000/tasks/${id}`,{
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updTask)
        })
        const data = await res.json()

        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:data.reminder} :  task ))
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
    <BrowserRouter>
      <div className="font-sans min-h-screen">
        <div className="container mx-auto p-8 border-2 border-blue-200 mt-16 max-w-screen-md rounded" >
          <Header toggleForm={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          { showAddTask && <AddTask onAdd={addTask}/>}
          <Routes>
            <Route path='/' element={<ManyTasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>} /> 
            <Route path='/task/:id' element={<Task setShowAddTask={setShowAddTask}/>}/>
            <Route path='/about' element={<About setShowAddTask={setShowAddTask}/>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;