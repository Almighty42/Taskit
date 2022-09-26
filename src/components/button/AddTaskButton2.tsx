// React
import React, { useContext } from 'react'
// useContext
import UserContext from 'UserContext'
// Icons
import AddTaskIcon2 from 'assets/SVGR/AddTaskIcon2'

const AddTaskButton2 = () => {
    // Context
    const { setOpenTask }: any = useContext(UserContext)

    return (
        <button onClick={() => { setOpenTask(true) }} className='AddTaskButton2' >
            Add task
            <AddTaskIcon2 />
        </button>
    )
}

export default AddTaskButton2