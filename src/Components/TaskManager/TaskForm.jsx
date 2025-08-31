import React from 'react'
import './TaskManager.css'
const TaskForm = () => {
  return (
    <div>
      <form className='form'>
        <input type='text' placeholder='Add Task'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TaskForm
