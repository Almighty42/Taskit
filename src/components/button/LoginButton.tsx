// React
import React from 'react'
// Style
import './loginButton.scss'

const loginButton = (props: { name: string }) => {
  return (
    <button>
        <h1> {props.name} </h1>
    </button>
  )
}

export default loginButton