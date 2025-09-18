import React from 'react'
import TaskManager from './Components/TaskManager/TaskManager'
import TaskForm from './Components/TaskManager/TaskForm'
import UseState from './Components/Hooks/UseState.jsx/UseState'
import UseReducer from './Components/Hooks/UseReducer/UseReducer'
import UseAction from './Components/Hooks/UseAction/UseAction'
import UseForm from './Components/Hooks/UseForm/useForm'
import UseEffect from './Components/Hooks/UseEffect/UseEffect'
import UseLayout from './Components/Hooks/UseLayOut/UseLayout'
import UseContext from './Components/Hooks/UseContext/UseContext'
import UseRef from './Components/Hooks/Useref/UseRef'

const App = () => {
  return (
    <div>
      <TaskManager/>
      <UseState/>
      <UseReducer/>
      <UseAction/>
      <UseForm/>
      <UseEffect/>
      <UseLayout/>
      <UseContext/>
      <UseRef/>
    </div>
  )
}

export default App
