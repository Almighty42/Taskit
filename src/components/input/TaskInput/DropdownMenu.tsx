// React
import React, { useState } from 'react'
// Style
import './DropdownMenu.scss'
// Icons
import TaskPriorityIcon from 'assets/SVGR/task/TaskPriorityIcon'

const DropdownMenu = (props: { color: string, border: string, setColor: any, setBorder: any }) => {
  // useState
  const [open, setOpen] = useState(false)

  return (
    <div onClick={() => { setOpen(!open) }} className={!open ? 'dropdownBody' : 'dropdownBody open'} >
      {open ? (
        <>
          <div>
            <TaskPriorityIcon color={props.color} borderColor={props.border} />
          </div>
          <div onClick={() => { props.setColor('#FF4646'); props.setBorder('#990000') }}>
            <TaskPriorityIcon color='#FF4646' borderColor='#990000' />
          </div>
          <div onClick={() => { props.setColor('#FFA346'); props.setBorder('#994D00') }}>
            <TaskPriorityIcon color='#FFA346' borderColor='#994D00' />
          </div>
          <div onClick={() => { props.setColor('#FFFF47'); props.setBorder('#999900') }}>
            <TaskPriorityIcon color='#FFFF47' borderColor='#999900' />
          </div>
          <div onClick={() => { props.setColor('#47FF47'); props.setBorder('#009900') }}>
            <TaskPriorityIcon color='#47FF47' borderColor='#009900' />
          </div>
          <div onClick={() => { props.setColor('#149E14'); props.setBorder('#062D06') }}>
            <TaskPriorityIcon color='#149E14' borderColor='#062D06' />
          </div>
        </>
      ) : (
        <>
          <TaskPriorityIcon color={props.color} borderColor={props.border} />
        </>
      )}
    </div>
  )
}

export default DropdownMenu