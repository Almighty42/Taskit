// React
import React, { useState, useEffect } from 'react'
// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Style
import './global.scss'
// Context
import UserContext from 'UserContext';
// Axios
import axios from 'axios';
// Views
import LoginPage from 'views/Login/LoginPage/LoginPage';
import RegisterPage from 'views/Register/RegisterPage/RegisterPage';
import HomePage from 'views/HomePage/HomePage';

function App() {
  // useState
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [openTask, setOpenTask] = useState(false)
  const [state, setState] = useState(false)
  const [tasks, setTasks] = useState([])
  const [Id, setId] = useState(localStorage.getItem('user'))
  
  // useEffect
  useEffect(() => {
    console.log("axios")
    const data = { id:localStorage.getItem('token'), }
    axios.post('http://localhost:4000/userCheck', data, { withCredentials: true })
      .then(res => {
        setEmail(res.data.email)
        setUsername(res.data.username)
        setId(res.data.id2)
      })
    axios.post('http://localhost:4000/todosGet', { userToken: localStorage.getItem('token') }, { withCredentials: true })
      .then(res => {
        if (!res.data == false) {
          setTasks(res.data);
        }
      })
  }, [])

  // Functions
  const logout = () => {
    localStorage.setItem('token', '')
    axios.post('http://localhost:4000/logout', {}, { withCredentials: true })
      .then(() => {
        setEmail('')
        setUsername('')
        setTasks([])
        localStorage.setItem('user', 'false')
      });
  }
  const deleteTask = (id: any) => {
    const data = { id: id, userToken: localStorage.getItem('token') }
    axios.post('http://localhost:4000/todosDel', data, { withCredentials: true })
      .then(res => {
        axios.post('http://localhost:4000/todosGet', { userToken:localStorage.getItem('token') }, { withCredentials: true })
          .then(res => {
            setTasks(res.data);
          })
      })
  }
  const changeMenu = (id: any, option: boolean) => {
    if (option) {
      tasks.map((task) => {
        if (task.id == id) {
          task.menu = true
          setState(true)
        }
      })
    } else if (!option) {
      tasks.map((task) => {
        if (task.id == id) {
          task.menu = false
          setState(false)
        }
      })
    }
  }
  const changeDisc = (id: any, disc: any) => {
    tasks.map((task) => {
      if (task.id == id) {
        task.disc = disc
      }
    })
    const data = { id: id, disc: disc, userToken: localStorage.getItem('token') }
    axios.post('http://localhost:4000/todosDisc', data, { withCredentials: true })
  }
  const changeCheck = (id: any, option: boolean) => {
    if (option) {
      tasks.map((task) => {
        if (task.id == id) {
          task.check = true
          setState(true)
          console.log(task.check)
        }
      });
    } else if (!option) {
      tasks.map((task) => {
        if (task.id == id) {
          task.check = false
          setState(false)
          console.log(task.check)
        }
      })
    }
    const data = { id: id, check: option, userToken: localStorage.getItem('token') }
    axios.post('http://localhost:4000/todosCheck', data, { withCredentials: true })
  }

  return (
    <>
      <UserContext.Provider value={{ email, setEmail, username, setUsername, tasks, setTasks, openTask, setOpenTask, deleteTask, changeMenu, state, logout, Id, changeDisc, changeCheck }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
