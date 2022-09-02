// React
import React from 'react'
// Style
import './inputField.scss'

const InputField = (props: { placeholder: string, type: string, value?:string, handleChange?:any, val2:number }) => {
  return (
    <div className='InputField' >
      <input required placeholder={props.placeholder} type={props.type} value={props.value} onChange={(e:any) => props.handleChange(e.target.value, props.val2)} />
    </div>
  )
}

export default InputField