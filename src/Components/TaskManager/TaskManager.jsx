import React, { useState } from 'react'
import './TaskManager.css'
import TaskForm from './TaskForm'
import TaskList from '../Hooks/TaskList'

const TaskManager = () => {
  const [task, setTask] = useState([])

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }
    setTask([...task, newTask])
  }

  const toggleFunction = (id) => {
    setTask(
      task.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList task={task} toggleFunction={toggleFunction} />
      <p>Task: {task.length}</p>
      
    </div>
  )
}

export default TaskManager
