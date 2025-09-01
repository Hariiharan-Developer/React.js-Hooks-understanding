import React from 'react'
import TaskManager from './Components/TaskManager/TaskManager'
import TaskForm from './Components/TaskManager/TaskForm'
import UseState from './Components/Hooks/UseState.jsx/UseState'
import UseReducer from './Components/Hooks/UseReducer/UseReducer'

const App = () => {
  return (
    <div>
      <TaskManager/>
      <UseState/>
      <UseReducer/>
    </div>
  )
}

export default App
