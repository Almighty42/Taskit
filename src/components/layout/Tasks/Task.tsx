// React
import React, { useContext, useEffect, useState } from 'react'
// Style
import "./Task.scss"
// useContext
import UserContext from 'UserContext'
// Icons
import TaskPriorityIcon2 from 'assets/SVGR/task/TaskPriorityIcon2'
import TaskPriorityIcon3 from 'assets/SVGR/task/TaskPriorityIcon3'
import EditIcon from 'assets/SVGR/task/EditIcon'
import DropdownIcon from 'assets/SVGR/task/DropdownIcon'
import DropdownIcon2 from 'assets/SVGR/task/DropdownIcon2'
import CloseIcon from 'assets/SVGR/task/CloseIcon'
import CheckIcon2 from 'assets/SVGR/task/CheckIcon2'

const Task = (props: { title: string, disc: string, color: string, border: string, id: string, menu: boolean, check:boolean }) => {
    // useState
    const [check, setCheck] = useState(false)
    const [value, setValue] = useState('')
    // useContext
    const { deleteTask, changeMenu, state, changeDisc, changeCheck }: any = useContext(UserContext)
    // useEffect
    useEffect(() => {
    }, [state])
    // Functions
    const handleChange = (e: any) => {
        setValue(e.target.value)
    }


    return (
        <div style={{ backgroundColor: `${props.check ? '#A6A6A6' : '#F5F5F5'}` }} className={props.menu ? 'taskBody drop' : 'taskBody'} >
            <div className='taskBody2'>
                <div className="taskHeader">
                    {props.check ? (
                        <>
                            <TaskPriorityIcon3 changeCheck={changeCheck} id={props.id} check={props.check} />
                        </>
                    ) : (
                        <>
                            <TaskPriorityIcon2 changeCheck={changeCheck} id={props.id} color={props.color} borderColor={props.border} />
                        </>
                    )}
                    <p style={{ textDecoration: `${props.check ? 'line-through' : 'none'}` }} > {props.title} </p>
                </div>
                <div className={props.menu ? 'taskNavigation drop' : 'taskNavigation'}>
                    {check ? (
                        <>
                            <CheckIcon2 onClick={() => { setCheck(false); changeMenu(props.id, false); changeDisc(props.id, value); setValue('') }} />
                        </>
                    ) : (
                        <>
                            {props.check ? (
                                <>
                                </>
                            ) : (
                                <>
                                    <EditIcon onClick={() => { setCheck(true); changeMenu(props.id, true) }} />
                                </>
                            )}
                        </>
                    )}
                    {props.menu ? (
                        <>
                            <DropdownIcon2 onClick={() => { changeMenu(props.id, false); setCheck(false); setValue('') }} />
                        </>
                    ) : (
                        <>
                            <DropdownIcon onClick={() => { changeMenu(props.id, true) }} />
                        </>
                    )}
                    <CloseIcon onClick={() => { deleteTask(props.id) }} />
                </div>
            </div>
            {props.menu ? (
                <>
                    <div className="discBody">
                        {check ? (
                            <>
                                <textarea value={value} onChange={handleChange} />
                            </>
                        ) : (
                            <>
                                <p style={{ textDecoration: `${props.check ? 'line-through' : 'none'}` }} > {props.disc} </p>
                            </>
                        )}
                    </div>
                </>
            ) : (<></>)}
        </div>
    )
}

export default Task