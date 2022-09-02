import * as React from "react"

const ProfileIcon = (props:any) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ cursor:'pointer' }}
  >
    <path
      d="M5.095 23.667v-4.953a2.476 2.476 0 0 1 2.476-2.476H22.43a2.476 2.476 0 0 1 2.476 2.476v4.953M2 28.619h26M19.952 6.333a4.952 4.952 0 1 1-9.904 0 4.952 4.952 0 0 1 9.904 0Z"
      stroke="#F5F5F5"
      strokeWidth={2.476}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ProfileIcon
