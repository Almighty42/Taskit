// React
import React, { useState, useContext } from 'react';
// Style
import './RegisterForm.scss';
import InputField from 'components/input/InputField';
import LoginButton from 'components/button/LoginButton';
// useContext
import UserContext from 'UserContext';
// Icons
import ShowPasswordIcon from 'assets/SVGR/ShowPasswordIcon';
import axios from 'axios';
var RegisterForm = function () {
    // useState
    var _a = useState(false), passwordCheck = _a[0], setCheck = _a[1];
    var _b = useState(''), email = _b[0], setEmail = _b[1];
    var _c = useState(''), password = _c[0], setPassword = _c[1];
    // useContext
    var user = useContext(UserContext);
    var registerUser = function (e) {
        e.preventDefault();
        //console.log(email)
        var data = { email: email, password: password };
        axios.post('http://localhost:4000/register', data, { withCredentials: true })
            .then(function (res) {
            user.setEmail();
        });
    };
    var handleChange = function (e, val) {
        switch (val) {
            case 1:
                break;
            case email:
                setEmail(e);
                break;
            case password:
                setPassword(e);
                break;
            case 4:
                break;
            default:
                break;
        }
    };
    return (React.createElement("form", { onSubmit: function (e) { return registerUser(e); }, className: 'form' },
        React.createElement("div", { className: "formHeader" },
            React.createElement("h2", null, " Register "),
            React.createElement("div", { className: "input username" },
                React.createElement("p", null, " Username "),
                React.createElement("div", null)),
            React.createElement("div", { className: "input email" },
                React.createElement("p", null, " Email "),
                React.createElement("div", null,
                    React.createElement(InputField, { type: 'text', placeholder: 'Type your email', value: email, handleChange: handleChange }))),
            React.createElement("div", { className: "input password" },
                React.createElement("p", null, " Password "),
                React.createElement("div", null,
                    React.createElement(InputField, { type: passwordCheck ? 'text' : 'password', placeholder: 'Type your password', value: password, handleChange: handleChange }),
                    React.createElement("button", { onClick: function () { setCheck(!passwordCheck); } },
                        React.createElement(ShowPasswordIcon, { color: passwordCheck ? '#474747' : '#B8BCCA' })))),
            React.createElement("div", { className: "input confirmPassword" },
                React.createElement("p", null, " Confirm password "),
                React.createElement("div", null))),
        React.createElement(LoginButton, { name: 'Register' })));
};
export default RegisterForm;
