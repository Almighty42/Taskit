// React
import React, { useContext, useEffect } from 'react'
// useContext
import UserContext from 'UserContext'
// Style
import './Tasks.scss'
// Components
import Task from 'components/layout/Tasks/Task'

const Tasks = () => {

  const { tasks }:any = useContext(UserContext)
  
  return (
    <div className='tasksDiv'>
      {tasks.map((task:any) => {
        return (
          <Task title={task.title} disc={task.disc} color={task.color} border={task.border} id={task.id} menu={task.menu} check={task.check} />
        )
      })}
    </div>
  )
}

export default Tasks