// React
import React from 'react'
// Style
import './inputField.scss'

const InputField = (props: { placeholder: string, type: string }) => {
  return (
    <>
      <input placeholder={props.placeholder} type={props.type}/>
    </>
  )
}

export default InputField