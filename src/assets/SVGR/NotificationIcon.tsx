import * as React from "react"

const NotificationIcon = (props: any) => (
  <svg
    width={33}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ cursor:'pointer' }}
  >
    <g clipPath="url(#a)" fill="#F5F5F5">
      <path d="M12.639 27.943v.024a3.72 3.72 0 1 0 7.439 0v-.024h-7.44ZM28.235 23.293l-3.348-4.918v-6.136a8.531 8.531 0 0 0-6.857-8.364v-1.89a1.673 1.673 0 0 0-3.345 0v1.89a8.531 8.531 0 0 0-6.856 8.364v6.136l-3.348 4.918a1.691 1.691 0 0 0 1.398 2.643h20.958a1.691 1.691 0 0 0 1.398-2.643Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(.67 .313)"
          d="M0 0h31.374v31.374H0z"
        />
      </clipPath>
    </defs>
  </svg>
)

export default NotificationIcon
