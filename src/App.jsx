import React from 'react'
import TaskManager from './Components/TaskManager/TaskManager'
import TaskForm from './Components/TaskManager/TaskForm'
import UseState from './Components/Hooks/UseState.jsx/UseState'
import UseReducer from './Components/Hooks/UseReducer/UseReducer'
import UseAction from './Components/Hooks/UseAction/UseAction'
import UseForm from './Components/Hooks/UseForm/useForm'
import UseEffect from './Components/Hooks/UseEffect/UseEffect'

const App = () => {
  return (
    <div>
      <TaskManager/>
      <UseState/>
      <UseReducer/>
      <UseAction/>
      <UseForm/>
      <UseEffect/>
    </div>
  )
}

export default App
