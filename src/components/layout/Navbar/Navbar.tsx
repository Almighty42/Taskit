// React
import React, { useContext, useState } from 'react'
// Style
import './Navbar.scss'
// React router
import { useNavigate } from "react-router-dom";
// useContext
import UserContext from 'UserContext'
// Icons
import TaskitLogo from 'assets/SVGR/TaskitLogo'
import AddTaskIcon from 'assets/SVGR/AddTaskIcon'
import NotificationIcon from 'assets/SVGR/NotificationIcon'
import ProfileIcon from 'assets/SVGR/ProfileIcon'
// Mui
import Dialog from '@mui/material/Dialog';
// Time Component
import Clock from 'react-live-clock';
// Components
import AddTask from 'components/AddTask'
import Profile from 'components/Profile';
// useMediaQuery
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
  // Time Component
  let now = new Date()

  // useState
  const [open, setOpen] = useState(false)

  // React router
  const navigate = useNavigate()

  // useContext
  const { tasks, setTasks, openTask, setOpenTask, logout }: any = useContext(UserContext)

  // useMediaQuery
  const queryCheck = useMediaQuery({
    query: '(max-width: 800px)'
  })

  return (
    <>
      <div className='navbar'>
        <div className="logo">
          <TaskitLogo />
        </div>
        <div className="navigation">
          <AddTaskIcon onClick={() => { setOpenTask(true) }} />
          <NotificationIcon />
          <p><Clock format={'HH:mm'} ticking={true} /></p>
          <ProfileIcon onClick={() => { setOpen(true) }} />
        </div>
      </div>
      <Dialog
        open={openTask}
        onClose={() => (setOpenTask(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: `${queryCheck ? '80vw' : '50vw'}`,  // Set your width here
              borderRadius: '25px'
            },
          },
        }}
      >
        <AddTask />
      </Dialog>
      <Dialog
        open={open}
        onClose={() => (setOpen(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width:"100%",
              maxWidth:'fit-content',
              borderRadius:'15px',
            },
          },
        }}
      >
        <Profile />
      </Dialog>
    </>
  )
}

export default Navbar