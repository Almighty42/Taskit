// React
import React, { useState, useContext } from 'react'
// Style
import './LoginForm.scss'
// React router
import { useNavigate } from "react-router-dom";
// Mui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Alert from '@mui/material/Alert';
// Components
import InputField from 'components/input/InputField'
import LoginButton from 'components/button/LoginButton'
import RedRegister from 'components/button/RedRegister'
// useContext
import UserContext from 'UserContext'
// Icons
import ShowPasswordIcon from 'assets/SVGR/ShowPasswordIcon'
// Axios
import axios from 'axios'

const LoginForm = () => {
  // useState
  const [passwordCheck, setCheck] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  // React router
  const navigate = useNavigate()

  // useContext
  const user: any = useContext(UserContext)

  // Functions
  const loginUser = function (e: any) {
    e.preventDefault()

    const data = { username, password };
    axios.post('https://taskit-dev.herokuapp.com/login', data, { withCredentials: true })
      .then((res) => {
        if (!res.data == false) {
          localStorage.setItem('token', res.data.userToken)
          user.setUsername(res.data.username)
          setUsername('')
          setPassword('')
          setError(false)
          navigate('/')
          localStorage.setItem('user', 'true')
          axios.post('https://taskit-dev.herokuapp.com/todosGet', { userToken:localStorage.getItem('token') }, { withCredentials: true })
            .then(res => {
              if (!res.data == false) {
                user.setTasks(res.data);
              }
            })
        } else {
          setError(true)
        }
      })
      .catch(() => {
        setError(true)
      })
  }

  const handleChange = function (e: any, val: any) {
    switch (val) {
      case 0:
        setUsername(e)
        break;
      case 1:
        setPassword(e)
        break;
    }
  }


  return (
    <>
      <form onSubmit={(e) => { loginUser(e); setUsername(''); setPassword('') }} className='form' >
        <div className="formHeader">
          <h2> Login </h2>
          <div className="input username">
            <p> Username </p>
            <div className='inputDiv' >
              <InputField type='text' placeholder='Type your username' value={username} handleChange={handleChange} val2={0} />
            </div>
          </div>
          <div className="input password">
            <p> Password </p>
            <div className='inputDiv'>
              <InputField type={passwordCheck ? 'text' : 'password'} placeholder='Type your password' value={password} handleChange={handleChange} val2={1} />
              <button type='button' onClick={() => { setCheck(!passwordCheck) }} >
                <ShowPasswordIcon color={passwordCheck ? '#474747' : '#B8BCCA'} />
              </button>
            </div>
          </div>
        </div>
        <LoginButton name='Login' />
        <RedRegister name="Register a new user" url='/register' />
      </form>
      <Dialog
        open={error}
        onClose={() => (setError(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ padding: 0 }} >
          <Alert style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClose={() => { setError(false) }} severity="error" >Error - invalid username or password.</Alert>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default LoginForm