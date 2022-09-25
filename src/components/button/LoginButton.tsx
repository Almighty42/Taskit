// React
import React from 'react'
// Style
import './loginButton.scss'

const loginButton = (props: { name: string }) => {
  return (
    <div className='loginButton'>
      <button type='submit' >
        <h1> {props.name} </h1>
      </button>
    </div>
  )
}

export default loginButton