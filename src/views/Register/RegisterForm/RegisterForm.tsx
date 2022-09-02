// React
import React, { useState, useContext } from 'react'
// Style
import './RegisterForm.scss'
// React router
import { useNavigate } from "react-router-dom";
// Mui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Alert from '@mui/material/Alert';
// Components
import InputField from 'components/input/InputField'
import LoginButton from 'components/button/LoginButton'
import RedRegister from 'components/button/RedRegister';
// useContext
import UserContext from 'UserContext'
// Icons
import ShowPasswordIcon from 'assets/SVGR/ShowPasswordIcon'

import axios from 'axios'

const RegisterForm = () => {
  // useState
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPassword, setconPassword] = useState('')
  const [passwordCheck, setCheck] = useState(false)
  const [error, setError] = useState(false)
  const [error2, setError2] = useState(false)
  const [error3, setError3] = useState(false)
  // React router
  const navigate = useNavigate()
  // useContext
  type test = {
    email?: string,
    setEmail?: any,
    username?: string,
    setUsername?: any
  }
  const user: test = useContext(UserContext)

  const registerUser = function (e: any) {
    e.preventDefault()

    if (password !== conPassword) {
      setError(true)
      setPassword('')
      setconPassword('')
    } else {
      const data = { username, email, password };
      axios.post('http://localhost:4000/register', data, { withCredentials: true })
        .then((res) => {
          console.log(res.data)
          if (res.data.status) {
            user.setEmail(res.data.email)
            user.setUsername(res.data.username)
            console.log(res.data)
            setUsername('')
            setEmail('')
            setPassword('')
            setconPassword('')
            navigate("/")
          } else {
            if (res.data.val == 'username') {
              setError2(true)
            } else if (res.data.val == 'email') {
              setError3(true)
            }
          }
        })
    }
  }

  const handleChange = function (e: any, val: any) {
    switch (val) {
      case 0:
        setUsername(e)
        break;
      case 1:
        setEmail(e)
        break;
      case 2:
        setPassword(e)
        break;
      case 3:
        setconPassword(e)
        break;

      default:
        break;
    }
  }

  return (
    <>
      <form onSubmit={e => registerUser(e)} className='form' >
        <div className="formHeader">
          <h2> Register </h2>
          <div className="input username">
            <p> Username </p>
            <div className='inputDiv'>
              <InputField type='text' placeholder='Type your username' value={username} handleChange={handleChange} val2={0} />
            </div>
          </div>
          <div className="input email">
            <p> Email </p>
            <div className='inputDiv'>
              <InputField type='email' placeholder='Type your email' value={email} handleChange={handleChange} val2={1} />
            </div>
          </div>
          <div className="input password">
            <p> Password </p>
            <div className='inputDiv'>
              <InputField type={passwordCheck ? 'text' : 'password'} placeholder='Type your password' value={password} handleChange={handleChange} val2={2} />
              <button onClick={() => { setCheck(!passwordCheck) }} >
                <ShowPasswordIcon color={passwordCheck ? '#474747' : '#B8BCCA'} />
              </button>
            </div>
          </div>
          <div className="input confirmPassword">
            <p> Confirm password </p>
            <div className='inputDiv'>
              <InputField type='password' placeholder='Confirm your password' value={conPassword} handleChange={handleChange} val2={3} />
            </div>
          </div>
        </div>
        <LoginButton name='Register' />
        <RedRegister name="Login" url='/login' />
      </form>
      <Dialog
        open={error}
        onClose={() => (setError(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ padding: 0 }} >
          <Alert style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClose={() => { setError(false) }} severity="error" >Error - passwords don't match</Alert>
        </DialogContent>
      </Dialog>
      <Dialog
        open={error2}
        onClose={() => (setError2(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ padding: 0 }} >
          <Alert style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClose={() => { setError2(false) }} severity="error" >Error - username is taken</Alert>
        </DialogContent>
      </Dialog>
      <Dialog
        open={error3}
        onClose={() => (setError3(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ padding: 0 }} >
          <Alert style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClose={() => { setError3(false) }} severity="error" >Error - email is taken</Alert>
        </DialogContent>
      </Dialog>
    </>

  )
}

export default RegisterForm