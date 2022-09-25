// React
import React from 'react';
// Style
import './LoginPage.scss';
// Login Form
import LoginForm from 'views/Login/LoginForm/LoginForm';
var LoginPage = function () {
    return (React.createElement("div", { className: 'background' },
        React.createElement(LoginForm, null)));
};
export default LoginPage;
