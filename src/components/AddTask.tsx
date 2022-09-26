// React
import React, { useState, useContext, useEffect } from 'react'
// useContext
import UserContext from 'UserContext'
// Style
import './AddTask.scss'
// Components
import AddTaskButton from 'components/button/AddTaskButton'
import AddTaskInput from 'components/input/TaskInput/AddTaskInput'
import DropdownMenu from 'components/input/TaskInput/DropdownMenu'
import AddTaskDisc from 'components/input/TaskInput/AddTaskDisc'
// Axios
import axios from 'axios'

const AddTask = () => {
    // useState
    const [color, setColor] = useState('#949494')
    const [border, setBorder] = useState('#000000')
    const [title, setTitle] = useState('')
    const [disc, setDisc] = useState('')

    // useContext
    const { tasks, setTasks }: any = useContext(UserContext)

    // Functions
    const addTodo = (e: any) => {
        const id = JSON.stringify(Math.floor(Math.random() * 10000) + 1)
        axios.put('http://localhost:4000/todos', { title: title, disc: disc, color: color, border: border, id: id, menu: false, check: false, userToken:localStorage.getItem('token') }, { withCredentials: true })
            .then(res => {
                console.log(res)
                setTasks([...tasks, { title: title, disc: disc, color: color, border: border, id: id, menu: false, check:false }])
                setColor('#949494')
                setBorder('#000000')
                setTitle('')
                setDisc('')
            })
    }

    return (
        <div className="addTask">
            <div className="addNavigation">
                <DropdownMenu color={color} setColor={setColor} border={border} setBorder={setBorder} />
                <AddTaskInput title={title} setTitle={setTitle} />
                <AddTaskButton addTodo={addTodo} />
            </div>
            <AddTaskDisc disc={disc} setDisc={setDisc} />
        </div>
    )
}

export default AddTask