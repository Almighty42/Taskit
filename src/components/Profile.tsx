// React
import React, { useState, useContext, useEffect } from 'react'
// React router
import { useNavigate } from "react-router-dom";
// Context
import UserContext from 'UserContext'
// Style
import './Profile.scss'
// Icons
import EditIcon2 from 'assets/SVGR/task/EditIcon2'
import CheckIcon from 'assets/SVGR/task/CheckIcon'
// Axios
import axios from 'axios'
// Mui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Alert from '@mui/material/Alert';

const Profile = () => {
    // useState
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [usernameVal, setUsernameVal] = useState('')
    const [emailVal, setEmailVal] = useState('')
    const [passwordVal, setPasswordVal] = useState('')
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const [error4, setError4] = useState(false)

    // useContext
    const { username, email, logout, setUsername, setEmail, Id }: any = useContext(UserContext)

    // useEffect
    useEffect(() => {
        console.log("axios")
        axios.post('https://taskit-dev.herokuapp.com/userGet', { userToken: localStorage.getItem('token') }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setEmail(res.data.email)
                setUsername(res.data.username)
            })
    }, [])

    // Function
    const validateEmail = (email: any) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    const handleChange = (e: any, option: any) => {
        if (option == 'username') {
            setUsernameVal(e.target.value)
        } else if (option == 'email') {
            setEmailVal(e.target.value)
        } else if (option == 'password') {
            setPasswordVal(e.target.value)
        }
    }
    const changeUser = async (option: any) => {
        if (option == 'username') {
            let data = { usernameVal, username, option, Id, userToken: localStorage.getItem('token') }
            axios.post('https://taskit-dev.herokuapp.com/changeUserDetails', data, { withCredentials: true })
                .then(res => {
                    if (res.data === false) {
                        setError2(true)
                    } else {
                        setUsername(usernameVal)
                    }
                })
        } else if (option == 'email') {
            if (!validateEmail(emailVal)) {
                setError3(true);
                setEmailVal('')
                setOpen2(false)
            } else {
                let data = { emailVal, username, option, Id, userToken: localStorage.getItem('token') }
                axios.post('https://taskit-dev.herokuapp.com/changeUserDetails', data, { withCredentials: true })
                    .then(res => {
                        if (res.data === false) {
                            setError(true)
                        } else {
                            setEmail(emailVal)
                        }
                    })
            }
        } else if (option == 'password') {
            if (passwordVal == '') {
                setError4(true)
            } else {
                let data = { passwordVal, username, option, Id, userToken: localStorage.getItem('token') }
                axios.post('https://taskit-dev.herokuapp.com/changeUserDetails', data, { withCredentials: true })
                    .then(res => {
                    })
            }
        }
    }

    // useNavigate
    const navigate = useNavigate()

    return (
        <>
            <div className='profileDiv' >
                <p id='profileHeader' >Your profile</p>
                <div className="divStyled">
                    <p>Username:</p>
                    <div className={open1 ? 'divEdit open' : 'divEdit'}>
                        {open1 ? (
                            <>
                                <input value={usernameVal} onChange={(e) => { handleChange(e, 'username') }} />
                                <CheckIcon onClick={() => { setOpen1(false); changeUser('username') }} />
                            </>
                        ) : (
                            <>
                                <p>{username}</p>
                                <EditIcon2 onClick={() => { setOpen1(true) }} />
                            </>
                        )}
                    </div>
                </div>
                <div className="divStyled">
                    <p>Email:</p>
                    <div className={open2 ? 'divEdit open' : 'divEdit'}>
                        {open2 ? (
                            <>
                                <input type='email' value={emailVal} onChange={(e) => { handleChange(e, 'email') }} />
                                <CheckIcon onClick={() => { setOpen2(false); changeUser('email') }} />
                            </>
                        ) : (
                            <>
                                <p>{email}</p>
                                <EditIcon2 onClick={() => { setOpen2(true) }} />
                            </>
                        )}
                    </div>
                </div>
                <div className="divStyled" id='password'>
                    <div className="divEdit">
                        {open3 ? (
                            <>
                                <input type='password' value={passwordVal} onChange={(e) => { handleChange(e, 'password') }} />
                                <CheckIcon onClick={() => { setOpen3(false); changeUser('password') }} />
                            </>
                        ) : (
                            <>
                                <p>Change your password</p>
                                <EditIcon2 onClick={() => { setOpen3(true) }} />
                            </>
                        )}
                    </div>
                </div>
                <div className="divStyled" style={{ cursor: 'pointer' }} onClick={() => { logout(); navigate('/login') }}>
                    <p>Log out</p>
                </div>
            </div>
            <Dialog
                open={error}
                onClose={() => (setError(false))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={{ padding: 0 }} >
                    <Alert style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClose={() => { setError(false) }} severity="error" >Invalid email, already taken</Alert>
                </DialogContent>
            </Dialog>
            <Dialog
                open={error2}
                onClose={() => (setError2(false))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={{ padding: 0 }} >
                    <Alert style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClose={() => { setError2(false) }} severity="error" >Invalid username, already taken</Alert>
                </DialogContent>
            </Dialog>
            <Dialog
                open={error3}
                onClose={() => (setError3(false))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={{ padding: 0 }} >
                    <Alert style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClose={() => { setError3(false) }} severity="error" >Invalid email, invalid format</Alert>
                </DialogContent>
            </Dialog>
            <Dialog
                open={error4}
                onClose={() => (setError4(false))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={{ padding: 0 }} >
                    <Alert style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClose={() => { setError4(false) }} severity="error" >Password cannot be empty</Alert>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Profile