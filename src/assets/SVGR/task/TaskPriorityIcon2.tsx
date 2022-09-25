import React from 'react'

const TaskPriorityIcon2 = (props: { color: string, borderColor: string, changeCheck:any, id:string }) => {



    return (
        <svg
            width={20}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            onClick={() => { props.changeCheck(props.id, true) }}
            style={{ display:'flex',justifyContent:'center', alignItems:'center', cursor:'pointer' }}
        >
            <circle cx={10} cy={10.5} r={9.5} fill={props.color} stroke={props.borderColor} />
        </svg>
    )
}

export default TaskPriorityIcon2