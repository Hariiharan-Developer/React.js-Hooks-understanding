import React, { useState } from 'react'
import './TaskManager.css'
const TaskForm = ({addTask}) => {
    const [value,setValue] = useState('')

    
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(value.trim()){

            console.log('Form Submitted', value)
            addTask(value)
            setValue('')
        }
    }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={(e)=>setValue(e.target.value)} type='text' placeholder='Add Task' value={value}/>
        <button type='submit'>Submit</button>
        
      </form>
       <br/>
      <hr/>
    </div>
  )
}

export default TaskForm
