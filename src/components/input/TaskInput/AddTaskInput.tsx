// React
import React from 'react'
// Style
import './AddTaskInput.scss'

const AddTaskInput = (props: { title: string, setTitle: any }) => {

    const handleChange = (e: any) => {
        props.setTitle(e.target.value)
    }

    return (
        <div className='AddTaskInput'>
            <input value={props.title} onChange={handleChange} placeholder='Task title' />
        </div>
    )
}

export default AddTaskInput