import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const About = ({setShowAddTask}) => {
    useEffect(() => {
        setShowAddTask(false)
    }, [setShowAddTask])
    return(
        <div>
            <h4>
                About APP
            </h4>
            <p>Version 1.0</p>
            <Link to="/" className="text-blue-700 hover:underline">Go Back</Link>
        </div>
    )
}
export default About