import * as React from "react"

const CloseIcon = (props: any) => (
  <svg
    width={14}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M13.682 2.605 11.895.818a1.084 1.084 0 0 0-1.533 0L7 4.18 3.637.818a1.084 1.084 0 0 0-1.532 0L.317 2.605a1.084 1.084 0 0 0 0 1.533L3.68 7.5.317 10.863a1.084 1.084 0 0 0 0 1.532l1.788 1.787c.423.424 1.11.424 1.532 0L7 10.82l3.363 3.362c.423.424 1.109.424 1.532 0l1.788-1.787a1.084 1.084 0 0 0 0-1.532L10.32 7.5l3.362-3.362a1.084 1.084 0 0 0 0-1.533Z"
        fill="#474747"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default CloseIcon
