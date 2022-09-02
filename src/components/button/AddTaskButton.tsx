// React
import React, { useContext } from 'react'
// Style
import './AddTaskButton.scss'
// useContext
import UserContext from 'UserContext'

const AddTaskButton = (props: { addTodo:any }) => {

    const { setOpenTask }:any = useContext(UserContext)

    return (
        <div className="AddTaskButton">
            <button onClick={() => { props.addTodo();setOpenTask(false) }} >
                <p> Add task </p>
            </button>
        </div>
    )
}

export default AddTaskButton