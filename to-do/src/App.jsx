import Header from './components/Header'
import ManyTasks from './components/ManyTasks'

function App() {
  return(
    <div className="font-sans min-h-screen">
      <div className="container mx-auto p-8 border-2 border-blue-200 mt-16 max-w-screen-md rounded" >
        <Header/>
        <ManyTasks/>
      </div>
    </div>
  )
}

export default App;