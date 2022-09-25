// React
import React from 'react';
// Style
import './RegisterPage.scss';
// Register Form
import RegisterForm from 'views/Register/RegisterForm/RegisterForm';
var RegisterPage = function () {
    return (React.createElement("div", { className: 'background' },
        React.createElement(RegisterForm, null)));
};
export default RegisterPage;
