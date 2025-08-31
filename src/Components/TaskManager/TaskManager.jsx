import React, { useState } from 'react'
import './TaskManager.css'
import TaskForm from './TaskForm'
const TaskManager = () => {

    const [task,seTask] = useState([])
  return (
    <div>
        <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskForm/>
      <p>Task:{task.length}</p>

        </div>
    </div>
  )
}

export default TaskManager
