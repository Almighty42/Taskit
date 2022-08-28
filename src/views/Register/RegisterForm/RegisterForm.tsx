// React
import React, { useState } from 'react'
// Style
import './RegisterForm.scss'
import InputField from 'components/input/InputField'
import LoginButton from 'components/button/LoginButton'
// Icons
import ShowPasswordIcon from 'assets/SVGR/ShowPasswordIcon'

const RegisterForm = () => {

  // useState
  const [passwordCheck, setCheck] = useState(false)

  return (
    <div className='form' >
      <div className="formHeader">
        <h2> Register </h2>
        <div className="input username">
          <p> Username </p>
          <div>
            <InputField type='text' placeholder='Type your username' />
          </div>
        </div>
        <div className="input email">
          <p> Email </p>
          <div>
            <InputField type='text' placeholder='Type your email' />
          </div>
        </div>
        <div className="input password">
          <p> Password </p>
          <div>
            <InputField type={passwordCheck ? 'text' : 'password'} placeholder='Type your password' />
            <button onClick={() => { setCheck(!passwordCheck) }} >
              <ShowPasswordIcon color={passwordCheck ? '#474747' : '#B8BCCA'} />
            </button>
          </div>
        </div>
        <div className="input confirmPassword">
          <p> Confirm password </p>
          <div>
            <InputField type='password' placeholder='Confirm your password' />
          </div>
        </div>
      </div>
      <LoginButton name='Register' />
    </div>
  )
}

export default RegisterForm