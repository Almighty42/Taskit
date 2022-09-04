// React
import React from 'react'
// Style
import './redRegister.scss'
// React router
import { useNavigate } from "react-router-dom";

const RedRegister = (props: { name:string, url:string }) => {
  // useNavigate
  const navigate = useNavigate()

  return (
    <div className='RedRegister'>
      <button onClick={() => { navigate(props.url) }} >
        <h1> {props.name} </h1>
      </button>
    </div>
  )
}

export default RedRegister