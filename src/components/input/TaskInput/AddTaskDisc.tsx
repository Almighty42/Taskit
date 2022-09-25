// React
import React from 'react'
// Style
import './AddTaskDisc.scss'

const AddTaskDisc = (props: { disc:string, setDisc:any }) => {
  // Functions
  const handleChange = (e:any) => {
    props.setDisc(e.target.value)
  }

  return (
    <div className='AddTaskDisc' ><textarea value={props.disc} onChange={handleChange} /></div>
  )
}

export default AddTaskDisc