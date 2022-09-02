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

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/user', { withCredentials: true })
      .then(res => {
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