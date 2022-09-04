// React
import React, { useEffect } from 'react'
// React router
import { useNavigate } from 'react-router-dom'
// Style
import './HomePage.scss'
// Components
import Navbar from 'components/layout/Navbar/Navbar'
import Sections from 'components/layout/Sections/Sections'
import Tasks from 'components/layout/Tasks/Tasks'
// Axios
import axios from 'axios'

const HomePage = () => {
  // useNavigate
  const navigate = useNavigate()

  // useEffect
  useEffect(() => {
    const data = { id:localStorage.getItem('token'), }
    axios.post('https://taskit-dev.herokuapp.com/userCheck', data, { withCredentials: true })
      .then(res => {
        console.log(res.data)
        if (Object.keys(res.data).length === 0) {
          navigate('/login')
        }
      })
  }, [])
  
  return (
    <div style={{ height:'100%', width:"100%" }} >
      <Navbar />
      <Sections />
      <Tasks />
    </div>
  )
}

export default HomePage