import * as React from "react"

const TaskPriorityIcon3 = (props: { changeCheck:any, id:string, check:any }) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    onClick={() => { props.changeCheck(props.id, false) }}
    style={{ display:'flex',justifyContent:'center', alignItems:'center', cursor:'pointer' }}
  >
    <circle
      cx={10}
      cy={10}
      r={9.75}
      fill="#6E6E6E"
      stroke="#000"
      strokeWidth={0.5}
    />
    <circle
      cx={10}
      cy={10}
      r={7.75}
      fill={props.check ? '#A6A6A6' : '#F5F5F5'}
      stroke="#000"
      strokeWidth={0.5}
    />
    <g clipPath="url(#a)">
      <path
        d="M9.141 14.338a.951.951 0 0 1-1.345 0l-3.268-3.269a.951.951 0 0 1 1.345-1.345l2.42 2.42.176.176.177-.177 5.48-5.48a.951.951 0 0 1 1.346 1.345l-6.33 6.33Z"
        fill="#6E6E6E"
        stroke="#000"
        strokeWidth={0.5}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(4 4.5)" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default TaskPriorityIcon3
