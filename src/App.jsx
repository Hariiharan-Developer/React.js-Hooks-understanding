import React from 'react'
import TaskManager from './Components/TaskManager/TaskManager'
import TaskForm from './Components/TaskManager/TaskForm'
import UseState from './Components/Hooks/UseState.jsx/UseState'

const App = () => {
  return (
    <div>
      <TaskManager/>
      <br/>
      <UseState/>
    </div>
  )
}

export default App
