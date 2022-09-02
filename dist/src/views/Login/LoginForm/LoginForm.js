// React
import React, { useState } from 'react';
// Style
import './LoginForm.scss';
// Components
import InputField from 'components/input/InputField';
import LoginButton from 'components/button/LoginButton';
// Icons
import ShowPasswordIcon from 'assets/SVGR/ShowPasswordIcon';
var LoginForm = function () {
    // useState
    var _a = useState(false), passwordCheck = _a[0], setCheck = _a[1];
    return (React.createElement("div", { className: 'form' },
        React.createElement("div", { className: "formHeader" },
            React.createElement("h2", null, " Login "),
            React.createElement("div", { className: "input username" },
                React.createElement("p", null, " Username "),
                React.createElement("div", null,
                    React.createElement(InputField, { type: 'text', placeholder: 'Type your username' }))),
            React.createElement("div", { className: "input password" },
                React.createElement("p", null, " Password "),
                React.createElement("div", null,
                    React.createElement(InputField, { type: passwordCheck ? 'text' : 'password', placeholder: 'Type your password' }),
                    React.createElement("button", { onClick: function () { setCheck(!passwordCheck); } },
                        React.createElement(ShowPasswordIcon, { color: passwordCheck ? '#474747' : '#B8BCCA' }))))),
        React.createElement(LoginButton, { name: 'Login' })));
};
export default LoginForm;
