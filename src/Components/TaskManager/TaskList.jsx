import React from 'react'

const TaskList = ({task}) => {
  return (
    <div>
      {task.map((task)=><li>{task['text']}</li>)}
      
    </div>
  )
}

export default TaskList
