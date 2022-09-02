import React from 'react'

const TaskPriorityIcon = (props: { color: string, borderColor: string }) => {

    return (
        <svg
            width={20}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            style={{ display:'flex',justifyContent:'center', alignItems:'center' }}
        >
            <circle cx={10} cy={10.5} r={9.5} fill={props.color} stroke={props.borderColor} />
        </svg>
    )
}

export default TaskPriorityIcon