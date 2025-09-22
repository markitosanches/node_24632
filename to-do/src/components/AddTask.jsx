import { useState } from 'react'
const AddTask = () => {
    
    const [text, setText] = useState('') 
    const [day, setDay] = useState('') 
    const [reminder, setReminder] = useState(false) 

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(text)
    }
    
    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                type="text"
                placeholder="Add Task"
                value={text}
                onChange = {(e) =>setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                type="datetime-local"
                placeholder="Add Day & Time"
                value={day}
                onChange = {(e) =>setDay(e.target.value)}
                />
            </div>
            <div className="form-control-check">
                <label>Set Reminder</label>
                <input 
                type="checkbox"
                checked={reminder}
                onChange = {(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" className="btn btn-gray btn-block" />
        </form>
    )
}
export default AddTask